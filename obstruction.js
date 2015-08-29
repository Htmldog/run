var obstruction1=[
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,0,0,0,0],
	[0,0,0,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];
var self=[
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
]
var operObstruction=arrToPos(obstruction1);
var operSelf=arrToPos(self);
//将2维数组变成元素为坐标信息的1维数组的
function arrToPos(arr) {
	var temp,pos=[];
	for(var i=0;i<5;i++){
		for(var j=0;j<10;j++){
			temp=arr[i][j];
			if(temp==1){
				var o={};
				o.x=j;
				o.y=i;
				pos.push(o);
			}
		}
	}
	return pos;
}
//把x转化为下标
function xyToIndex(x,y){
	return y*10+x;
}
//得到要渲染得障碍物的单元
function getObstruction(obj){
	var unit = obj.getElementsByTagName("span");
	return unit;
}
//绘制一个单元格
function draw(obj,arrPos){
	var units=getObstruction(obj);
	for(var i=0,len=arrPos.length;i<len;i++){
		var index = xyToIndex(arrPos[i].x,arrPos[i].y);
		units[index].className="solid";
	}
}
//绘制障碍物
draw(J_g_2,operObstruction);
//绘制自己
draw(J_g_1,operSelf);
//碰撞检测
function isCrash(obstruction,self){
	var map1={};
	for(var i=0,len=obstruction.length;i<len;i++){
		var key = obstruction[i].x+"_"+obstruction[i].y;
		map1[key]=1;
	}
	for(var j=0,len2=self.length;j<len2;j++){
		var key2=self[j].x+"_"+self[j].y;
		if(map1[key2]){
			return true;
		}
	}
	return false;
}



