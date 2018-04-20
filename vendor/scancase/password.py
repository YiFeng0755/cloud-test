#coding: utf8
import json
# 必须继承的基类
TARGET_BASE_CLASS = ['TestCase', 'testbase.testcase.TestCase']

# 本地扫描路径
LOCAL_BASE_URL = '/var/stf/testproject2'

# svn项目路径
SVN_PROJECT_URL = 'http://svn.oa.com:24399/testcase'

# svn用户名
SVN_USER_NAME = 'YoungLiu'

# svn密码
SVN_PASSWD = 'ly-999999'

RETURN_CODE = 0

a = {'LOCAL_BASE_URL':LOCAL_BASE_URL,'SVN_PROJECT_URL':SVN_PROJECT_URL,'SVN_USER_NAME':SVN_USER_NAME,'SVN_PASSWD':SVN_PASSWD}
b = json.dumps(a)
print b