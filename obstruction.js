var obstruction1=[
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,0,0,0,0],
	[0,0,0,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];
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
function draw(obj,obstructionArr){
	var units=getObstruction(obj);
	var arrPos = arrToPos(obstruction1);
	for(var i=0,len=arrPos.length;i<len;i++){
		var index = xyToIndex(arrPos[i].x,arrPos[i].y);
		units[index].className="solid";
	}
}
draw(J_g_2,obstruction1);



