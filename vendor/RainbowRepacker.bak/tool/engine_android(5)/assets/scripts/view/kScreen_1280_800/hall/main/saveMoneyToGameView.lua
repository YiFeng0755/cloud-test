local saveMoneyToGameView=
{
	name="saveMoneyToGameView",type=0,typeName="View",time=0,report=0,x=0,y=0,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignTopLeft,
	{
		name="maskView",type=1,typeName="Image",time=77791700,report=0,x=0,y=0,width=1280,height=720,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignTopLeft,file="hall/common/bg_shiled.png"
	},
	{
		name="bg",type=1,typeName="Image",time=59463769,report=0,x=0,y=0,width=800,height=450,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="hall/common/popupWindow/popupWindow_bg_55_55_55_55.png",gridLeft=55,gridRight=55,gridTop=55,gridBottom=55,
		{
			name="Image1",type=1,typeName="Image",time=77791772,report=0,x=0,y=-55,width=617,height=190,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="hall/common/popupWindow/popupWindow_title.png",
			{
				name="Text2",type=4,typeName="Text",time=77792366,report=0,x=0,y=-8,width=50,height=50,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=34,textAlign=kAlignLeft,colorRed=255,colorGreen=235,colorBlue=186,string=[[温馨提示]]
			}
		},
		{
			name="closeBtn",type=0,typeName="Button",time=114619864,x=-15,y=-15,width=60,height=60,nodeAlign=kAlignTopRight,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/popupWindow/popupWindow_close.png"
		},
		{
			name="saveMoneyBtn",type=0,typeName="Button",time=114619467,x=100,y=70,width=276,height=78,nodeAlign=kAlignBottomLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/btns/btn_orange_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
			{
				name="Text1",type=0,typeName="Text",time=114619683,x=0,y=0,width=64,height=64,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[存钱入场]],fontSize=34,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186
			}
		},
		{
			name="goHighRoomBtn",type=0,typeName="Button",time=114619742,x=100,y=70,width=276,height=78,nodeAlign=kAlignBottomRight,visible=1,fillParentWidth=0,fillParentHeight=0,file="hall/common/btns/btn_green_164x89_l25_r25_t25_b25.png",gridLeft=25,gridRight=25,gridTop=25,gridBottom=25,
			{
				name="Text1",type=0,typeName="Text",time=114619743,x=0,y=0,width=64,height=64,nodeAlign=kAlignCenter,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[去高级场]],fontSize=34,textAlign=kAlignCenter,colorRed=255,colorGreen=235,colorBlue=186
			}
		},
		{
			name="tips",type=4,typeName="Text",time=59540281,report=0,x=0,y=150,width=595,height=40,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,fontSize=36,textAlign=kAlignCenter,colorRed=143,colorGreen=92,colorBlue=31,string=[[您的现金太多啦～去挑战高级场吧！]]
		},
		{
			name="desView",type=0,typeName="View",time=114623470,x=0,y=190,width=64,height=64,nodeAlign=kAlignTop,visible=1,fillParentWidth=0,fillParentHeight=0
		}
	}
}
return saveMoneyToGameView;