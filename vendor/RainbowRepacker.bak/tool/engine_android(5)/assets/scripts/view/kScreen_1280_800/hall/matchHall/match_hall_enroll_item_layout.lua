local match_hall_pin_map = require("qnFiles/qnPlist/hall/match_hall_pin");
local match_hall_enroll_item_layout=
{
	name="match_hall_enroll_item_layout",type=0,typeName="View",time=0,x=0,y=0,width=668,height=132,visible=1,nodeAlign=kAlignCenter,fillParentWidth=0,fillParentHeight=0,
	{
		name="itemBtn",type=0,typeName="Button",time=113768582,x=0,y=0,width=668,height=132,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,file="isolater/bg_blank.png",
		{
			name="bg",type=0,typeName="Image",time=113768583,x=0,y=3,width=668,height=132,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,file=match_hall_pin_map['enroll_item_bg.png']
		},
		{
			name="nameView",type=0,typeName="View",time=113768584,x=180,y=23,width=200,height=40,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0
		},
		{
			name="rewardView",type=0,typeName="View",time=113766665,x=20,y=0,width=101,height=101,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,
			{
				name="icon",type=0,typeName="Image",time=113768589,x=0,y=0,width=101,height=101,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,file=match_hall_pin_map['icon_default.png']
			}
		},
		{
			name="infoView",type=0,typeName="View",time=113766812,x=0,y=10,width=425,height=40,nodeAlign=kAlignBottom,visible=1,fillParentWidth=0,fillParentHeight=0,
			{
				name="iconTime",type=0,typeName="Image",time=113768590,x=12,y=0,width=22,height=20,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file=match_hall_pin_map['item_time.png'],
				{
					name="time",type=0,typeName="Text",time=113768591,x=26,y=0,width=75.3,height=40,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[00:00:00]],fontSize=18,textAlign=kAlignLeft,colorRed=147,colorGreen=62,colorBlue=1
				}
			},
			{
				name="iconCount",type=0,typeName="Image",time=113768592,x=160,y=0,width=22,height=20,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file=match_hall_pin_map['item_man.png'],
				{
					name="count",type=0,typeName="Text",time=113768593,x=24,y=0,width=64,height=40,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[99999]],fontSize=18,textAlign=kAlignLeft,colorRed=147,colorGreen=62,colorBlue=1
				}
			},
			{
				name="iconReward",type=0,typeName="Image",time=113768594,x=245,y=0,width=22,height=20,nodeAlign=kAlignLeft,visible=0,fillParentWidth=0,fillParentHeight=0,file=match_hall_pin_map['item_trophy.png'],
				{
					name="reward",type=0,typeName="Text",time=113768595,x=24,y=0,width=145.9,height=40,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[六到八个字最合适]],fontSize=18,textAlign=kAlignLeft,colorRed=147,colorGreen=62,colorBlue=1
				}
			},
			{
				name="timeTextView",type=0,typeName="View",time=120745215,x=-112,y=-36,width=120,height=63,nodeAlign=kAlignRight,visible=1,fillParentWidth=0,fillParentHeight=0
			}
		},
		{
			name="resurgence_icon",type=0,typeName="Image",time=113768596,x=5,y=5,width=97,height=86,nodeAlign=kAlignTopLeft,visible=0,fillParentWidth=0,fillParentHeight=0,file=match_hall_pin_map['icon_revive.png']
		},
		{
			name="iconDefault",type=0,typeName="Image",time=101417508,x=130,y=23,width=40,height=40,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/bg_blank.png"
		},
		{
			name="icon",type=0,typeName="Image",time=114012642,x=130,y=23,width=40,height=40,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/bg_blank.png"
		}
	}
}
return match_hall_enroll_item_layout;