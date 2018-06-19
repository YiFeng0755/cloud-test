#!/usr/bin/env python
# coding: utf-8


import usb
import fire
import re
import json

class AdbUSB(object):
    def list(self):
        devices = []
        for d in usb.core.find(find_all=True):
            if d.serial_number:
                if not re.match('0000:',d.serial_number):
                    devices.append(d.serial_number)
                    print '%s' % d.serial_number

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
                print '%s has been reset' % (d.serial_number)
            except usb.core.USBError:
                pass
        elif len(ok_serials) == 0:
            print 'No device serial number is', serial
        else:
            print 'Too many device matched', serial

    def resetmany(self,list):
        print list
        for d in usb.core.find(find_all=True):
            if d.serial_number in list:
                try:
                    d.reset()
                    print '%s has been reset'%(d.serial_number)
                except usb.core.USBError:
                    pass



if __name__ == '__main__':
    fire.Fire(AdbUSB)