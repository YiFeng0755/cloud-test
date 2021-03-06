CommonJumpCmds = {
    GET_USER_DATA           = 1001,         --获取用户资料
    DOWNLOAD_WITH_URL       = 1002,         --根据url跳转到下载 (此功能在原生端进行处理了)
    QUIT_GAME               = 1003,         --退出应用
    GOTO_LOGIN              = 1004,         --跳转至登录界面
    GOTO_USERINFO           = 1005,         --跳转至个人资料界面
    GOTO_HALL               = 1006,         --跳转至大厅界面
    GOTO_GAME               = 1007,         --快速进入游戏
    GOTO_SHOP               = 1008,         --跳转至商城界面
    GOTO_TASK               = 1009,         --跳转至任务界面
    GOTO_RANK               = 1010,         --跳转至排行榜界面
    GOTO_FRIENDS            = 1011,         --跳转至好友界面
    UPDATE_MONEY            = 1012,         --更新用户银币
    INPUT_CDKEY             = 1013,         --输入CDKEY
    GOTO_ACTIVITY_ONLY_LUA  = 1014,         --WARNING! 不要调用这个，纯兼容 LUA端跳转至活动中心界面, WEB端则是模拟返回键) 
    GOTO_DIAMOND_SHOP       = 1015,         --跳转至钻石商城界面
    GOTO_PRIVATE_ROOM       = 1016,         --跳转至私人房界面
    GOTO_BROADCAST          = 1017,         --跳转至系统广播发送
    GOTO_SEND_MESSAGE       = 1018;         --跳转至私信发送界面
    GOTO_WEIXIN_SHARE       = 1019;         --跳转至微信分享界面
    GOTO_WEIXIN_INVITE      = 1020;         --跳转至微信邀请界面
    GOTO_MATCH_ROOM         = 1021;         --跳转至比赛场列表界面
    GOTO_GAME_ROOM_LIST     = 1022;         --跳转至房间选场列表
    GOTO_GROUP_ROOM         = 1023;         --跳转至集团赛界面
    UPDATE_DIAMOND          = 1024;         --更新用户钻石
    START_RECHARGE          = 1025;         --发送充值信息
    ANGECY_RECHARGE         = 1026,         --代理商支付
    ANGECY_H5_BACK          = 1027,         --代理商H5按返回键
    UPDATE_ACTIVTY_COUNT    = 1028,         --活动SDK返回活动数目
    UPDATE_SILVER           = 1029,         --更新用户银元
    UPDATE_CRYSTAL          = 1030,         --更新用户金条
    GOTO_QQ_SHARE_QZONE     = 1031,         --qq分享到空间
    GOTO_QQ_SHARE_FRIEND    = 1032,         --qq分享到朋友
    SEND_DOWNLOAD           = 1033,         --跳转到大厅进行下载
    GOTO_ACTIVITY           = 1034,         --跳转至活动中心界面  
    GOTO_REGISTER_ACCOUNT   = 1035,         --跳转到注册账号界面
} 