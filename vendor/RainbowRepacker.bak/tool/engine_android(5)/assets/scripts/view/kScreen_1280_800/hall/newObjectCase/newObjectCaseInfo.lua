local backpack_qn_pin_map = require("qnFiles/qnPlist/hall/backpack_qn_pin");
local newObjectCaseInfo=
{
	name="newObjectCaseInfo",type=0,typeName="View",time=0,x=0,y=0,width=1280,height=720,visible=1,nodeAlign=kAlignTopLeft,fillParentWidth=1,fillParentHeight=1,stageW=0,
	{
		name="Image_mask",type=0,typeName="Image",time=108130916,x=171,y=224,width=1280,height=720,nodeAlign=kAlignTopLeft,visible=0,fillParentWidth=1,fillParentHeight=1,file="isolater/bg_shiled.png"
	},
	{
		name="ImageBack",type=0,typeName="Image",time=108131046,x=0,y=0,width=723,height=720,nodeAlign=kAlignRight,visible=1,fillParentWidth=0,fillParentHeight=1,file=backpack_qn_pin_map['backpack_bg.png'],gridLeft=55,gridRight=55,gridTop=55,gridBottom=55,varname="ImageBack",callbackfunc="onBindBlankFunc",
		{
			name="Image_tittle_bg",type=1,typeName="Image",time=0,x=0,y=0,width=700,height=82,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,file=backpack_qn_pin_map['backpack_tittle_bg.png'],
			{
				name="Text_tittle",type=4,typeName="Text",time=0,x=0,y=0,width=128,height=36,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=32,textAlign=kAlignLeft,colorRed=159,colorGreen=115,colorBlue=50,string=[[物品详情]],colorA=1
			}
		},
		{
			name="closeBtn",type=0,typeName="Button",time=108131047,x=43,y=10,width=80,height=57,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/backpack/backpack_btn_bg.png",gridLeft=20,gridRight=20,gridTop=20,gridBottom=20,varname="closeBtn",callbackfunc="oncloseBtnClick",
			{
				name="Image18",type=1,typeName="Image",time=0,x=0,y=0,width=39,height=39,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file=backpack_qn_pin_map['backpack_back.png']
			}
		},
		{
			name="Image_bg2",type=1,typeName="Image",time=0,x=10,y=15,width=659,height=615,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,file="hall/common/bg_blank.png",gridLeft=10,gridRight=10,gridTop=10,gridBottom=10,fillTopLeftX=40,fillBottomRightX=24,fillTopLeftY=90,fillBottomRightY=15,
			{
				name="useBtn",type=0,typeName="Button",time=108131048,x=105,y=56,width=190,height=80,nodeAlign=kAlignBottomRight,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,varname="useBtn",
				{
					name="btnDescribe",type=0,typeName="Text",time=108131049,x=0,y=0,width=117,height=64,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[合成（3）]],fontSize=26,textAlign=kAlignCenter,colorRed=255,colorGreen=232,colorBlue=164,colorA=1,varname="btnDescribe"
				}
			},
			{
				name="Button_sell",type=0,typeName="Button",time=108131048,x=105,y=56,width=190,height=80,nodeAlign=kAlignBottomLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,varname="Button_sell",callbackfunc="onBindToSell",
				{
					name="btnDescribe",type=0,typeName="Text",time=108131049,x=0,y=0,width=112,height=64,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[出售]],fontSize=26,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186,colorA=1
				}
			},
			{
				name="describeFrame",type=0,typeName="Image",time=108131054,x=0,y=155,width=562,height=154,nodeAlign=kAlignBottom,visible=1,fillParentWidth=0,fillParentHeight=0,file=backpack_qn_pin_map['backpack_des_bg.png'],gridLeft=8,gridRight=8,gridTop=8,gridBottom=8,
				{
					name="Text_type_des",type=4,typeName="Text",time=0,x=21,y=15,width=104,height=29,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,fontSize=26,textAlign=kAlignLeft,colorRed=224,colorGreen=71,colorBlue=19,colorA=1,varname="Text_type_des"
				},
				{
					name="describeText",type=0,typeName="TextView",time=108131055,x=21,y=3,width=520,height=100,nodeAlign=kAlignBottomLeft,visible=1,fillParentWidth=0,fillParentHeight=0,fontSize=28,textAlign=kAlignTopLeft,colorRed=143,colorGreen=92,colorBlue=31,colorA=1,varname="describeText"
				}
			},
			{
				name="Text__bindPhoneNumberTip",type=4,typeName="Text",time=0,x=0,y=22,width=408,height=27,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,fontSize=24,textAlign=kAlignLeft,colorRed=203,colorGreen=51,colorBlue=0,string=[[游客账号需要绑定手机后才能兑换奖品]],colorA=1,varname="Text__bindPhoneNumberTip"
			},
			{
				name="View21",type=0,typeName="View",time=0,x=240,y=223,width=659,height=305,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,fillBottomRightY=310,fillTopLeftX=0,fillBottomRightX=0,fillTopLeftY=0,
				{
					name="iconFrame",type=0,typeName="Image",time=108131050,x=0,y=-43,width=158,height=160,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,file=backpack_qn_pin_map['backpack_box.png'],varname="iconFrame",
					{
						name="icon",type=0,typeName="Image",time=108131051,x=0,y=0,width=130,height=130,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/bg_blank.png",varname="icon"
					},
					{
						name="name",type=0,typeName="Text",time=108131052,x=0,y=164,width=136,height=50,nodeAlign=kAlignTop,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[一袋银币]],fontSize=34,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,colorA=1,varname="name"
					},
					{
						name="Text_numOrday",type=0,typeName="Text",time=110051449,x=0,y=206,width=112,height=50,nodeAlign=kAlignTop,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[数量：10]],fontSize=28,textAlign=kAlignCenter,colorRed=224,colorGreen=71,colorBlue=19,colorA=1,varname="Text_numOrday"
					}
				}
			}
		}
	}
}
return newObjectCaseInfo;