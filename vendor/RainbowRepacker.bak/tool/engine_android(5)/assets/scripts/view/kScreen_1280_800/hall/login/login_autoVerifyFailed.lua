local login_autoVerifyFailed=
{
	name="login_autoVerifyFailed",type=0,typeName="View",time=0,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,
	{
		name="shiled",type=1,typeName="Image",time=77266903,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,file="hall/common/bg_shiled.png"
	},
	{
		name="contentView",type=0,typeName="View",time=77266904,report=0,x=0,y=0,width=800,height=560,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
		{
			name="bg",type=1,typeName="Image",time=77266905,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,file="hall/common/popupWindow/popupWindow_bg_55_55_55_55.png",gridLeft=55,gridRight=55,gridTop=55,gridBottom=55
		},
		{
			name="titleBg",type=1,typeName="Image",time=77266906,report=0,x=0,y=-55,width=617,height=190,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="hall/common/popupWindow/popupWindow_title.png",
			{
				name="title",type=4,typeName="Text",time=77266907,report=0,x=0,y=-5,width=140,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,string=[[账号注册]]
			}
		},
		{
			name="closeBtn",type=2,typeName="Button",time=77266908,report=0,x=-15,y=-15,width=60,height=60,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,file="hall/common/popupWindow/popupWindow_close.png"
		},
		{
			name="centerView",type=0,typeName="View",time=77266912,report=0,x=75,y=60,width=200,height=150,fillTopLeftX=5,fillTopLeftY=65,fillBottomRightX=5,fillBottomRightY=110,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,
			{
				name="subView",type=0,typeName="View",time=77264961,report=0,x=0,y=20,width=480,height=170,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,
				{
					name="line1",type=4,typeName="Text",time=77265013,report=0,x=0,y=0,width=640,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[(可能由于网络或安全监管软件拦截原因而失败)]]
				},
				{
					name="line2",type=4,typeName="Text",time=77265082,report=0,x=0,y=-1,width=434,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[可以尝试关闭监控软件再试一次]]
				},
				{
					name="line3",type=4,typeName="Text",time=77265092,report=0,x=0,y=0,width=248,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,fontSize=30,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[或手动填写手机号]]
				}
			}
		},
		{
			name="bottomView",type=0,typeName="View",time=77266916,report=0,x=0,y=0,width=200,height=150,fillTopLeftX=5,fillTopLeftY=385,fillBottomRightX=5,fillBottomRightY=5,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,
			{
				name="subView",type=0,typeName="View",time=77266250,report=0,x=0,y=0,width=460,height=110,visible=1,fillParentWidth=0,fillParentHeight=1,nodeAlign=kAlignCenter,
				{
					name="tryAgainBtn",type=2,typeName="Button",time=48073198,report=0,x=-70,y=-25,width=250,height=89,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,file="hall/common/btns/btn_orange_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
					{
						name="name",type=4,typeName="Text",time=48310173,report=0,x=0,y=0,width=120,height=30,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=36,textAlign=kAlignLeft,colorRed=255,colorGreen=250,colorBlue=200,string=[[再试一次]]
					}
				},
				{
					name="fillByHandBtn",type=2,typeName="Button",time=48073391,report=0,x=-70,y=-25,width=250,height=85,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
					{
						name="name",type=4,typeName="Text",time=48310208,report=0,x=0,y=0,width=0,height=0,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=36,textAlign=kAlignLeft,colorRed=255,colorGreen=250,colorBlue=200,string=[[手动填写]]
					}
				}
			}
		},
		{
			name="topView",type=0,typeName="View",time=84090078,report=0,x=0,y=0,width=200,height=150,fillTopLeftX=5,fillTopLeftY=65,fillBottomRightX=5,fillBottomRightY=370,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,
			{
				name="desc",type=4,typeName="Text",time=84090080,report=0,x=0,y=20,width=350,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignLeft,colorRed=118,colorGreen=72,colorBlue=18,string=[[手机号自动验证未成功]]
			}
		}
	}
}
return login_autoVerifyFailed;