local login_pin_map = require("qnFiles/qnPlist/hall/login_pin");
local login_regAccount_psdVerify=
{
	name="login_regAccount_psdVerify",type=0,typeName="View",time=0,report=0,x=0,y=0,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,
	{
		name="shiled",type=1,typeName="Image",time=77333594,report=0,x=0,y=0,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,file="hall/common/bg_shiled.png"
	},
	{
		name="contentView",type=0,typeName="View",time=77333595,report=0,x=0,y=0,width=800,height=560,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
		{
			name="bg",type=1,typeName="Image",time=77333596,report=0,x=0,y=0,width=800,height=560,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,file="hall/common/popupWindow/popupWindow_bg_55_55_55_55.png",gridLeft=55,gridRight=55,gridTop=55,gridBottom=55
		},
		{
			name="titleBg",type=1,typeName="Image",time=77333597,report=0,x=0,y=-55,width=617,height=190,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="hall/common/popupWindow/popupWindow_title.png",
			{
				name="title",type=4,typeName="Text",time=77333598,report=0,x=0,y=-5,width=136,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,string=[[密码验证]]
			}
		},
		{
			name="closeBtn",type=2,typeName="Button",time=77333599,report=0,x=-15,y=-15,width=60,height=60,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,file="hall/common/popupWindow/popupWindow_close.png"
		},
		{
			name="centerView",type=0,typeName="View",time=77333603,report=0,x=0,y=0,width=790,height=385,fillTopLeftX=5,fillTopLeftY=65,fillBottomRightX=5,fillBottomRightY=110,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,
			{
				name="subView",type=0,typeName="View",time=77333742,report=0,x=0,y=0,width=610,height=250,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
				{
					name="accountView",type=0,typeName="View",time=77333744,report=0,x=0,y=0,width=610,height=70,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignTop,
					{
						name="keyTextPhone",type=4,typeName="Text",time=77333745,report=0,x=0,y=0,width=120,height=40,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[手机号：]]
					},
					{
						name="valueTextPhone",type=4,typeName="Text",time=77333746,report=0,x=160,y=0,width=204,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=23,colorGreen=126,colorBlue=64,string=[[123456789132]]
					},
					{
						name="modphoneText",type=4,typeName="Text",time=77333747,report=0,x=0,y=0,width=155,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,fontSize=30,textAlign=kAlignCenter,colorRed=200,colorGreen=100,colorBlue=40,string=[[修改手机号]],
						{
							name="line",type=1,typeName="Image",time=77333748,report=0,x=0,y=-2,width=155,height=4,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignBottom,file="hall/common/split_line_h.png"
						}
					}
				},
				{
					name="codeView",type=0,typeName="View",time=77333749,report=0,x=0,y=0,width=610,height=70,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignCenter,
					{
						name="keyTextPsd",type=4,typeName="Text",time=77333750,report=0,x=0,y=0,width=124,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[验证码：]],colorA=1
					},
					{
						name="codeBg",type=1,typeName="Image",time=77333751,report=0,x=150,y=0,width=200,height=65,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,file="hall/common/input_bg_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
						{
							name="codeEditText",type=6,typeName="EditText",time=77333752,report=0,x=10,y=0,width=234,height=65,visible=1,fillParentWidth=0,fillParentHeight=1,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=215,colorGreen=171,colorBlue=127
						},
						{
							name="errorMsg",type=4,typeName="Text",time=77333753,report=0,x=0,y=-22,width=120,height=22,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=20,textAlign=kAlignLeft,colorRed=255,colorGreen=0,colorBlue=0,string=[[请输入验证码]]
						},
						{
							name="warningIcon",type=1,typeName="Image",time=77333754,report=0,x=-50,y=0,width=36,height=35,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file=login_pin_map['error.png']
						}
					},
					{
						name="timeClockText",type=4,typeName="Text",time=48132522,report=0,x=60,y=0,width=150,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,fontSize=30,textAlign=kAlignLeft,colorRed=200,colorGreen=100,colorBlue=40,string=[[重发(30秒)]],colorA=1
					},
					{
						name="resendSmsBtn",type=2,typeName="Button",time=48132678,report=0,x=90,y=0,width=150,height=80,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="hall/common/btns/btn_orange_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
						{
							name="resendText",type=4,typeName="Text",time=48132793,report=0,x=0,y=0,width=120,height=30,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=30,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,string=[[重发短信]]
						}
					},
					{
						name="resendVoiceBtn",type=2,typeName="Button",time=117823987,report=0,x=-60,y=0,width=150,height=80,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="hall/common/btns/btn_orange_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
						{
							name="resendText",type=4,typeName="Text",time=117823988,report=0,x=0,y=0,width=120,height=30,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=30,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,string=[[语音验证]]
						}
					}
				},
				{
					name="psdView",type=0,typeName="View",time=90151506,report=0,x=0,y=0,width=610,height=70,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignBottom,
					{
						name="tips",type=4,typeName="Text",time=90151507,report=0,x=0,y=0,width=200,height=65,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[设置密码：]]
					},
					{
						name="psdBg",type=1,typeName="Image",time=90151508,report=0,x=0,y=0,width=460,height=65,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="hall/common/input_bg_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
						{
							name="psdEditText",type=6,typeName="EditText",time=90151509,report=0,x=14,y=0,width=430,height=65,visible=1,fillParentWidth=0,fillParentHeight=1,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=210,colorGreen=195,colorBlue=160
						},
						{
							name="psdErrorMsg",type=4,typeName="Text",time=90151510,report=0,x=0,y=-23,width=350,height=24,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=22,textAlign=kAlignLeft,colorRed=255,colorGreen=0,colorBlue=0,string=[[请输入新密码]]
						},
						{
							name="psdWarningIcon",type=1,typeName="Image",time=90151511,report=0,x=-50,y=0,width=36,height=35,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file=login_pin_map['error.png']
						}
					}
				}
			},
			{
				name="subView2",type=0,typeName="View",time=103369425,report=0,x=0,y=30,width=610,height=90,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,
				{
					name="registrationView",type=0,typeName="View",time=103369440,report=0,x=0,y=0,width=610,height=70,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignCenter,
					{
						name="tips",type=4,typeName="Text",time=103369441,report=0,x=0,y=0,width=200,height=65,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[推荐码：]]
					},
					{
						name="registrationBg",type=1,typeName="Image",time=103369442,report=0,x=0,y=0,width=460,height=65,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="hall/common/input_bg_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
						{
							name="registrationEditText",type=6,typeName="EditText",time=103369443,report=0,x=14,y=0,width=430,height=65,visible=1,fillParentWidth=0,fillParentHeight=1,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignLeft,colorRed=210,colorGreen=195,colorBlue=160
						},
						{
							name="registrationErrorMsg",type=4,typeName="Text",time=103369444,report=0,x=15,y=-25,width=350,height=24,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottomLeft,fontSize=22,textAlign=kAlignLeft,colorRed=255,colorGreen=0,colorBlue=0,string=[[推荐码无效，请更改或留空]]
						},
						{
							name="registrationWarningIcon",type=1,typeName="Image",time=103369445,report=0,x=-50,y=0,width=36,height=35,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file=login_pin_map['error.png']
						}
					}
				}
			}
		},
		{
			name="bottomView",type=0,typeName="View",time=77333608,report=0,x=0,y=0,width=790,height=170,fillTopLeftX=5,fillTopLeftY=385,fillBottomRightX=5,fillBottomRightY=5,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,
			{
				name="regBtn",type=2,typeName="Button",time=48073198,report=0,x=0,y=1,width=370,height=85,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
				{
					name="regBtnText",type=4,typeName="Text",time=48322809,report=0,x=0,y=0,width=370,height=85,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,fontSize=36,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,string=[[下一步]]
				}
			}
		}
	}
}
return login_regAccount_psdVerify;