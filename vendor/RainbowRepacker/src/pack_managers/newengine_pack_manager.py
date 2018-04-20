#-*-coding:utf8 -*-

import os
import log_utils
import manifest_utils
from xml.etree import ElementTree
import file_utils
from pack_managers.base_pack_manager import PackManager
from config import ConfigParse

class NewEnginePackManager(PackManager):
    
    _projectShorName = 'newengine'

    def injectFilesForAutomation(self):

        self.iterFileMapAndCopyFile()
        
        # 2.修改assets/plugin，增加automatedTest
        decompilePluginPath = os.path.join(self.decompileDir, 'assets', 'plugin')
        # folder not exists
        if not os.path.exists(os.path.dirname(decompilePluginPath)):
            os.makedirs(os.path.dirname(decompilePluginPath))
        # file not exits
        if not os.path.exists(decompilePluginPath):
            with open(decompilePluginPath, 'w') as f:
                f.write('automatedTest')
        else:
            with open(decompilePluginPath) as f:
                lines = f.readlines()
                lines[0:0] = ['automatedTest\n']
            with open(decompilePluginPath, 'w') as f:
                f.writelines(lines)

    
        # 4.AndroidManifest.xml增加 provider
        decompileManifest = os.path.join(self.decompileDir, 'AndroidManifest.xml')
        ElementTree.register_namespace(manifest_utils.androidN, manifest_utils.androidNS)
        srcTree = ElementTree.parse(decompileManifest)
        t = ElementTree.Element('provider', {"android:name":"com.boyaa.autotest.ElementProvider",
                                     "android:authorities": "com.boyaa.test.providers.element",
                                     "android:multiprocess": "false",
                                     "android:exported": "true"})
        srcRoot = srcTree.getroot()
        srcAppNode = srcRoot.find('application')
        srcAppNode.append(t)
        manifest_utils.prettyXml(srcRoot)
        srcTree.write(decompileManifest)

        package_name = manifest_utils.getPackageName(decompileManifest)
        self._packageName = package_name

    def iterFileMapAndCopyFile(self):
        cfgResRootDir = self.sdksRootDir
        luaversion = ConfigParse.shareInstance().getLuaVersion()
        fileMap = ConfigParse.shareInstance().getFileMap()
        
        rules = fileMap.get(luaversion, None)
        if not rules:
            print("no coresponding luaversion")
            exit(1)
        
        for k, v in rules.items():
            source = os.path.join(cfgResRootDir, luaversion, k)
            target = os.path.join(self.decompileDir, v['targetDir'])
            # 如果source是文件
            if os.path.isfile(source):
                # 直接复制到目标文件夹, 忽略模式
                target = os.path.join(target, k)
                file_utils.copyFiles(source, target)
            # 是文件夹
            else:
                mode = v['copyMode']
                if mode == '*':
                    file_utils.copyFiles(source, target)
                elif mode == '-':
                    sourceDirFiles = os.listdir(source)
                    targetDirFiles = os.listdir(target)
                    for f in [s for s in sourceDirFiles if s in targetDirFiles]:
                        source  = os.path.join(source, f)
                        target = os.path.join(target, f)
                        file_utils.copyFiles(source, target)
