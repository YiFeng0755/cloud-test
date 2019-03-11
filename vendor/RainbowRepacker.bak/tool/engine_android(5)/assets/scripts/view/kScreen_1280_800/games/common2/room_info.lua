room_info=
{
	name="room_info",type=0,typeName="View",time=0,x=0,y=0,width=1280,height=720,visible=1,nodeAlign=kAlignTopLeft,fillParentWidth=1,fillParentHeight=1,
	{
		name="qrCodeShiled",type=1,typeName="Image",time=0,x=0,y=0,width=1280,height=720,visible=0,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignTopLeft,file="isolater/bg_blank.png"
	},
	{
		name="privateRoomView",type=0,typeName="View",time=108764123,x=0,y=0,width=215,height=47,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0,
		{
			name="bg",type=0,typeName="Image",time=108764146,x=0,y=0,width=215,height=47,nodeAlign=kAlignTopLeft,visible=1,fillParentWidth=0,fillParentHeight=0,file="isolater/info_bg.png",gridLeft=88,gridRight=88,
			{
				name="qrCodeBtn",type=1,typeName="Button",time=0,x=0,y=0,width=215,height=47,visible=1,fillParentWidth=1,fillParentHeight=1,nodeAlign=kAlignTopLeft,file="isolater/bg_blank.png"
			},
			{
				name="roomId",type=0,typeName="Text",time=108764152,x=70,y=3,width=64,height=33,nodeAlign=kAlignLeft,visible=1,fillParentWidth=0,fillParentHeight=0,string=[[ID:]],fontSize=26,textAlign=kAlignLeft,colorRed=233,colorGreen=198,colorBlue=154,colorA=1
			},
			{
				name="qrCodeIcon",type=1,typeName="Image",time=0,x=33,y=4,width=33,height=33,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,file="games/common/jifen/qrCodeIcon.png"
			}
		},
		{
			name="qrCodeView",type=1,typeName="Image",time=0,x=20,y=49,width=180,height=188,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTopLeft,file="isolater/bg_blank.png",
			{
				name="bg",type=1,typeName="Image",time=0,x=0,y=0,width=180,height=188,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignTop,file="games/common/qr_bg.png"
			},
			{
				name="qrCode",type=1,typeName="Image",time=0,x=0,y=4,width=152,height=152,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,file="isolater/bg_blank.png"
			},
			{
				name="jifenRoomInfoView",type=0,typeName="View",time=0,x=0,y=-15,width=160,height=20,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignBottom,
				{
					name="times",type=4,typeName="Text",time=0,x=0,y=0,width=40,height=20,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignLeft,fontSize=18,textAlign=kAlignLeft,colorRed=233,colorGreen=198,colorBlue=154,string=[[倍数]],colorA=1
				},
				{
					name="rounds",type=4,typeName="Text",time=0,x=0,y=0,width=40,height=20,visible=0,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=18,textAlign=kAlignRight,colorRed=233,colorGreen=198,colorBlue=154,string=[[局数]],colorA=1
				},
				{
					name="tips",type=4,typeName="Text",time=0,x=0,y=0,width=144,height=20,visible=1,fillParentWidth=0,fillParentHeight=0,nodeAlign=kAlignCenter,fontSize=18,textAlign=kAlignCenter,colorRed=233,colorGreen=198,colorBlue=154,string=[[扫二维码进入房间]],colorA=1
				}
			}
		}
	}
}
return room_info;