roomSetting_new=
{
	name="roomSetting_new",type=0,typeName="View",time=0,report=0,x=0,y=0,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignTopLeft,
	{
		name="shiled",type=0,typeName="Image",time=112894910,x=28,y=476,width=1280,height=720,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=1,fillParentHeight=1,file="isolater/bg_shiled.png"
	},
	{
		name="bg",type=1,typeName="Image",time=29476236,report=0,x=0,y=0,width=700,height=500,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="isolater/popupWindow/popupWindow_bg_55_55_55_55.png",gridLeft=55,gridRight=55,gridTop=55,gridBottom=55,
		{
			name="title",type=1,typeName="Image",time=0,x=0,y=-55,width=617,height=190,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="isolater/popupWindow/popupWindow_title.png",
			{
				name="Text24",type=4,typeName="Text",time=0,x=0,y=0,width=119,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignLeft,colorRed=255,colorGreen=245,colorBlue=204,string=[[设   置]],colorA=1
			}
		},
		{
			name="musicView",type=0,typeName="View",time=29476289,report=0,x=0,y=84,width=580,height=100,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,
			{
				name="musicMinBtn",type=2,typeName="Button",time=29476463,report=0,x=85,y=0,width=50,height=45,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,file="isolater/min.png"
			},
			{
				name="musicTx",type=4,typeName="Text",time=29477852,report=0,x=0,y=0,width=75,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[音乐:]],colorA=1
			},
			{
				name="musicMaxBtn",type=2,typeName="Button",time=29477918,report=0,x=0,y=0,width=50,height=45,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="isolater/max.png"
			},
			{
				name="musicSlider",type=0,typeName="Slider",time=29477983,report=0,x=30,y=0,width=330,height=41,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,gridLeft=15,gridRight=15,gridTop=15,gridBottom=15,bgFile="isolater/progress_bg_l15_r15_t15_b15.png",fgFile="isolater/progress_fg2_l15_r15_t15_b15.png",buttonFile="isolater/progress_btn2.png"
			}
		},
		{
			name="effectView",type=0,typeName="View",time=29476313,report=0,x=0,y=183,width=580,height=100,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,
			{
				name="effectTx",type=4,typeName="Text",time=29477559,report=0,x=0,y=0,width=75,height=35,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[音效:]]
			},
			{
				name="effectMinBtn",type=2,typeName="Button",time=29477641,report=0,x=85,y=0,width=50,height=45,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,file="isolater/min.png"
			},
			{
				name="effectSlider",type=0,typeName="Slider",time=29477983,report=0,x=30,y=0,width=330,height=41,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,gridLeft=15,gridRight=15,gridTop=15,gridBottom=15,bgFile="isolater/progress_bg_l15_r15_t15_b15.png",fgFile="isolater/progress_fg2_l15_r15_t15_b15.png",buttonFile="isolater/progress_btn2.png"
			},
			{
				name="effectMaxBtn",type=2,typeName="Button",time=29477789,report=0,x=0,y=0,width=50,height=45,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file="isolater/max.png"
			}
		},
		{
			name="roomSetCheck",type=0,typeName="View",time=29478905,report=0,x=0,y=50,width=580,height=150,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,
			{
				name="muteCk",type=0,typeName="View",time=112902684,x=0,y=0,width=46,height=47,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0,
				{
					name="muteTx",type=4,typeName="Text",time=29479369,report=0,x=0,y=0,width=60,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[静音]],colorA=1
				},
				{
					name="switch",type=8,typeName="Switch",time=0,x=70,y=0,width=133,height=66,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,onFile="isolater/switch_on_bg.png",offFile="isolater/switch_off_bg.png",buttonFile="isolater/switch_on.png"
				}
			},
			{
				name="readPokerCk",type=0,typeName="View",time=112902728,x=154,y=0,width=46,height=47,nodeAlign=kAlignTopRight,visible=1,fillParentWidth=0,fillParentHeight=0,
				{
					name="readPokerTx",type=4,typeName="Text",time=29479441,report=0,x=0,y=0,width=60,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[读牌]]
				},
				{
					name="switch",type=8,typeName="Switch",time=0,x=70,y=0,width=133,height=66,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,onFile="isolater/switch_on_bg.png",offFile="isolater/switch_off_bg.png",buttonFile="isolater/switch_on.png"
				}
			},
			{
				name="shakeCk",type=0,typeName="View",time=112902776,x=0,y=10,width=46,height=47,nodeAlign=kAlignBottomLeft,visible=1,fillParentWidth=0,fillParentHeight=0,
				{
					name="shakeTx",type=4,typeName="Text",time=29479498,report=0,x=0,y=0,width=60,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[震动]]
				},
				{
					name="switch",type=8,typeName="Switch",time=0,x=70,y=0,width=133,height=66,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,onFile="isolater/switch_on_bg.png",offFile="isolater/switch_off_bg.png",buttonFile="isolater/switch_on.png"
				}
			},
			{
				name="shieldChatCk",type=0,typeName="View",time=112902865,x=154,y=0,width=46,height=47,nodeAlign=kAlignBottomRight,visible=1,fillParentWidth=0,fillParentHeight=0,
				{
					name="shieldChatTx",type=4,typeName="Text",time=29479551,report=0,x=0,y=0,width=60,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=30,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[聊天]]
				},
				{
					name="switch",type=8,typeName="Switch",time=0,x=70,y=0,width=133,height=66,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,onFile="isolater/switch_on_bg.png",offFile="isolater/switch_off_bg.png",buttonFile="isolater/switch_on.png"
				}
			}
		},
		{
			name="closeBtn",type=1,typeName="Button",time=0,x=-15,y=-15,width=60,height=60,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,file="isolater/popupWindow/popupWindow_close.png"
		}
	}
}
return roomSetting_new;