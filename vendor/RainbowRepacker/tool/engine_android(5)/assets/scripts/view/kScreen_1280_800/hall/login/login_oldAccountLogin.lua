local login_pin_map = require("qnFiles/qnPlist/hall/login_pin");
local login_oldAccountLogin=
{
	name="login_oldAccountLogin",type=0,typeName="View",time=0,report=0,x=0,y=0,width=1280,height=800,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,
	{
		name="shiled",type=1,typeName="Image",time=77271581,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,file="hall/common/bg_shiled.png"
	},
	{
		name="contentView",type=0,typeName="View",time=77271582,report=0,x=0,y=0,width=800,height=560,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
		{
			name="bg",type=1,typeName="Image",time=77271583,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,file="hall/common/popupWindow/popupWindow_bg_55_55_55_55.png",gridLeft=55,gridRight=55,gridTop=55,gridBottom=55
		},
		{
			name="titleBg",type=1,typeName="Image",time=77271584,report=0,x=0,y=-55,width=617,height=190,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="hall/common/popupWindow/popupWindow_title.png",
			{
				name="title",type=4,typeName="Text",time=77271585,report=0,x=0,y=-5,width=10,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,string=[[登录游戏]]
			}
		},
		{
			name="closeBtn",type=2,typeName="Button",time=77271586,report=0,x=-15,y=-15,width=60,height=60,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,file="hall/common/popupWindow/popupWindow_close.png"
		},
		{
			name="centerView",type=0,typeName="View",time=77271590,report=0,x=0,y=0,width=0,height=0,fillTopLeftX=5,fillTopLeftY=65,fillBottomRightX=5,fillBottomRightY=110,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,
			{
				name="subView",type=0,typeName="View",time=77272091,report=0,x=0,y=10,width=620,height=290,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
				{
					name="pswdView",type=0,typeName="View",time=77272482,report=0,x=0,y=105,width=0,height=70,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignTop,
					{
						name="psdText",type=4,typeName="Text",time=48070882,report=0,x=-10,y=0,width=78,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=32,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[密码：]]
					},
					{
						name="psdBg",type=1,typeName="Image",time=48129873,report=0,x=0,y=5,width=440,height=65,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="hall/common/input_bg_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
						{
							name="psdEditText",type=6,typeName="EditText",time=48238958,report=0,x=10,y=0,width=420,height=60,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignLeft,fontSize=34,textAlign=kAlignLeft,colorRed=220,colorGreen=180,colorBlue=140
						},
						{
							name="psdWarningIcon",type=1,typeName="Image",time=48131121,report=0,x=10,y=-2,width=36,height=35,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file=login_pin_map['error.png']
						},
						{
							name="psdErrorMsg",type=4,typeName="Text",time=48131030,report=0,x=1,y=-33,width=300,height=30,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=24,textAlign=kAlignLeft,colorRed=190,colorGreen=70,colorBlue=70,string=[[请输入密码]]
						}
					},
					{
						name="findPsd",type=4,typeName="Text",time=94401137,report=0,x=-40,y=0,width=100,height=30,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,fontSize=30,textAlign=kAlignCenter,colorRed=118,colorGreen=72,colorBlue=18,string=[[找回密码]],
						{
							name="line",type=1,typeName="Image",time=77275251,report=0,x=0,y=-2,width=10,height=5,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignBottom,file="hall/common/split_line_h.png"
						}
					}
				},
				{
					name="confirmBtn",type=2,typeName="Button",time=48129988,report=0,x=150,y=-60,width=250,height=89,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
					{
						name="confirmBtnText",type=4,typeName="Text",time=48130134,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=36,textAlign=kAlignCenter,colorRed=255,colorGreen=250,colorBlue=200,string=[[登  录]]
					}
				},
				{
					name="accountView",type=0,typeName="View",time=77272450,report=0,x=0,y=-5,width=0,height=70,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignTop,
					{
						name="phoneText",type=4,typeName="Text",time=94401138,report=0,x=-10,y=0,width=78,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=34,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[账号：]]
					},
					{
						name="listEditText",type=0,typeName="View",time=48235482,report=0,x=0,y=6,width=440,height=70,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
						{
							name="warningIcon",type=1,typeName="Image",time=94401139,report=0,x=-45,y=0,width=36,height=35,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file=login_pin_map['error.png']
						},
						{
							name="errorMsg",type=4,typeName="Text",time=94401140,report=0,x=0,y=-33,width=308,height=30,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=24,textAlign=kAlignLeft,colorRed=190,colorGreen=70,colorBlue=70,string=[[请输入手机号码]]
						}
					}
				}
			}
		},
		{
			name="bottomView",type=0,typeName="View",time=77271594,report=0,x=5,y=385,width=730,height=180,fillTopLeftX=5,fillTopLeftY=460,fillBottomRightX=5,fillBottomRightY=5,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,
			{
				name="loginarea",type=2,typeName="Button",time=48130424,report=0,x=-150,y=-80,width=250,height=89,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/common/btns/btn_orange_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
				{
					name="accountLogin",type=4,typeName="Text",time=48130821,report=0,x=0,y=0,width=96,height=24,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=32,textAlign=kAlignCenter,colorRed=255,colorGreen=250,colorBlue=200,string=[[游客试玩]]
				}
			},
			{
				name="registerArea",type=2,typeName="Button",time=111264830,report=0,x=-150,y=-80,width=250,height=89,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/common/btns/btn_orange_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
				{
					name="accountRegist",type=4,typeName="Text",time=111264832,report=0,y=0,width=96,height=24,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=32,textAlign=kAlignCenter,colorRed=255,colorGreen=250,colorBlue=200,string=[[注册新账号]]
				}
			},
			{
				name="phoneNumber",type=4,typeName="Text",time=117903006,report=0,x=570,y=10,width=78,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=24,textAlign=kAlignLeft,colorRed=0,colorGreen=0,colorBlue=255,string=[[0411-86991118]]
			},
			{
				name="phoneTips",type=4,typeName="Text",time=117904929,report=0,x=440,y=10,width=40,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=24,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[客服电话：]]
			},
			{
				name="phoneLine",type=0,typeName="Image",time=120312483,x=570,y=10,width=100,height=2,nodeAlign=kAlignBottomLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/blueLine.png"
			}
		}
	}
}
return login_oldAccountLogin;