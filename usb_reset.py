#!/usr/bin/env python
# coding: utf-8

import rethinkdb as r
import usb
import paramiko
from paramiko.transport import Transport
from paramiko.client import SSHClient
import json
import socket, fcntl, struct

class UsbReset(object):
    def __init__(self, **kwargs):
        self.conn = r.connect(**kwargs)
        self.ssh_client = SSHClient()
        self.transport = Transport

    def get_offline_devices(self):
        off_line = {}
        eles = r.table('devices').filter({'present': False}).run(self.conn)
        for ele in eles:
            devices = []
            ip = ele.get('provider').get('name')
            serial = ele.get('serial')
            #print 'ip:%s,serial:%s'%(ip,serial)
            if not off_line.has_key(ip):
                devices.append(serial)
                off_line[ip] = devices
            else:
                devices = off_line.get(ip)
                #print 'devices:%s'%devices
                devices.append(serial)
                off_line[ip] = devices
        return off_line

    def reset(self, serial):
        devices = {}
        for d in usb.core.find(find_all=True):
            print d
            if d.serial_number:
                devices[d.serial_number] = d

        ok_serials = []
        for sn in devices.keys():
            if sn.startswith(str(serial)):
                ok_serials.append(sn)

        if len(ok_serials) == 1:
            serial = ok_serials[0]
            d = devices.get(serial)
            try:
                d.reset()
            except usb.core.USBError:
                pass
        elif len(ok_serials) == 0:
            print 'No device serial number is', serial
        else:
            print 'Too many device matched', serial

    def reset_offline_devices(self):
        off_line = self.get_offline_devices()
        print 'off_line:%s'%off_line
        ips = off_line.keys()
        for ip in ips:
            try:
                transport = self.transport(ip,22)
                transport.connect(username='root',password='boyaa!@#456')
                sftp = paramiko.SFTPClient.from_transport(transport)
                sftp.put('/var/stf/adbusb.py','/var/stf/adbusb.py')
                transport.close()
            except Exception, e:
                print e
            self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.ssh_client.connect(ip,22,'root','boyaa!@#456')
            print '----------'
            cmd = "python /var/stf/adbusb.py resetmany "+"'"+json.dumps(off_line[ip])+"'"
            print cmd
            print 'reset devices on %s'%ip
            stdin, stdout, stderr = self.ssh_client.exec_command(cmd)

            stdout = stdout.read()
            stderr = stderr.read()
            # print 'stdin:%s'%stdin
            print stdout
            print 'stderr:%s' % stderr
            self.ssh_client.close()

def get_ip(ifname):
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    return socket.inet_ntoa(fcntl.ioctl(s.fileno(), 0x8915, struct.pack('256s', ifname[:15]))[20:24])

if __name__ == '__main__':
    ipadd = get_ip('eth0')
    options = {
        'port': 28015,
        'db': 'stf'
    }
    options['host'] = ipadd
    print options
    UsbReset(**options).reset_offline_devices()

