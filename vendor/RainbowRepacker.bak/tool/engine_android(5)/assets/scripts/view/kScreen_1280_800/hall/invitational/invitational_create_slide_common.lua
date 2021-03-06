local invitational_pin_map = require("qnFiles/qnPlist/hall/invitational_pin");
local invitational_create_slide_common=
{
	name="invitational_create_slide_common",type=0,typeName="View",time=0,x=0,y=0,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,
	{
		name="shieldBg",type=1,typeName="Image",time=0,x=37,y=413,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignTopLeft,file="hall/common/bg_shiled.png"
	},
	{
		name="centerView",type=0,typeName="View",time=0,x=-2,y=0,width=606,height=720,visible=1,fillParentWidth=0,fillParentHeight=1,nodeAlign=kAlignRight,
		{
			name="bg",type=1,typeName="Image",time=0,x=0,y=0,width=624,height=720,visible=1,fillParentWidth=0,fillParentHeight=1,nodeAlign=kAlignRight,file="hall/common/slide_bg.png"
		},
		{
			name="titleBg",type=1,typeName="Image",time=0,x=0,y=0,width=599,height=82,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,file=invitational_pin_map['tab_normal_bg.png'],
			{
				name="title",type=4,typeName="Text",time=0,x=0,y=0,width=599,height=82,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignCenter,fontSize=32,textAlign=kAlignCenter,colorRed=157,colorGreen=115,colorBlue=55,colorA=1
			}
		},
		{
			name="radioButtonGroup",type=0,typeName="RadioButtonGroup",time=0,x=0,y=0,width=600,height=82,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopRight,
			{
				name="radio1",type=0,typeName="RadioButton",time=0,x=0,y=0,width=302,height=82,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,file=invitational_pin_map['tab_money_normal.png'],file2=invitational_pin_map['tab_money_select.png']
			},
			{
				name="radio2",type=0,typeName="RadioButton",time=0,x=0,y=0,width=302,height=82,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignRight,file=invitational_pin_map['tab_crystal_normal.png'],file2=invitational_pin_map['tab_crystal_select.png']
			}
		},
		{
			name="contentView",type=0,typeName="View",time=0,x=0,y=-20,width=606,height=450,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignCenter,
			{
				name="content",type=0,typeName="View",time=0,x=0,y=0,width=606,height=450,visible=1,fillParentWidth=1,fillParentHeight=0,nodeAlign=kAlignCenter
			}
		},
		{
			name="line1",type=1,typeName="Image",time=0,x=0,y=-65,width=534,height=2,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/invitational/option_line.png"
		},
		{
			name="line2",type=1,typeName="Image",time=0,x=0,y=25,width=534,height=2,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/invitational/option_line.png"
		},
		{
			name="btn",type=1,typeName="Button",time=0,x=0,y=290,width=255,height=95,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
			{
				name="text",type=4,typeName="Text",time=0,x=0,y=0,width=68,height=40,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignLeft,colorRed=255,colorGreen=250,colorBlue=200,string=[[确定]],colorA=1
			}
		}
	}
}
return invitational_create_slide_common;