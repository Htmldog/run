var t1=t5=t9=100,
t2=t6=t10=0,
t3=t7=t11=-100,
t4=t8=t12=-200;
function move(){
	var count=0;
	window.t = setInterval(function(){
        console.log(12121212)
		count++;
		if(count>100){
			clearInterval(window.t);
            cycle();
			return;
		}
        Increase();
        IncreaseGift();
        //判断是否相撞
        var reg = /\-?[0-9]+\.?[0-9]*/g;
        var temp=J_g_2.style.webkitTransform;
        temp=temp.match(reg);
        if(temp[0]==51){
            if(isCrash(operObstruction,operSelf)){
                console.log("crash!");
            }else{
                console.log("no crash!");
            }
        }
	},10);
}
//
function Increase(){
    for(var i=1;i<13;i++){
        window["t"+i]++;       
        if(i<5){
            window["J"+i].style.webkitTransform="translateZ("+window["t"+i]+"px) rotateX(90deg)";
        }else{
            window["J"+i].style.webkitTransform="translateZ("+window["t"+i]+"px) rotateY(90deg)";
        }
    }
}
//
var g2=-500;
function IncreaseGift(){
    if(!window["J_g_2"]){
        return;
    }
    g2++;
    if(g2==100){
        // J_g_2.parentNode.removeChild(J_g_2);
    }else{
        J_g_2.style.webkitTransform="translateZ("+g2+"px) rotateX(0deg)";
    }
}
//
function cycle(){
    var temp,reg=/\-?[0-9]+\.?[0-9]*/g,temp2,isCycle=false;
    for(var i=1;i<13;i++){
        temp=window["J"+i].style.webkitTransform;
        temp2=temp.match(reg);
        if(temp2[0]==200){
            isCycle=true;
            if(i<5){
                window["J"+i].style.webkitTransform="translateZ(-200px)rotateX(90deg)";
            }else{
                window["J"+i].style.webkitTransform="translateZ(-200px)rotateY(90deg)";
            }
            window["t"+i]=-200;
            // move();
        }
    }
    if(isCycle){
        move();
    }
}
//
function stop(){
    clearInterval(window.t);
    t1=t5=t9=100,
    t2=t6=t10=0,
    t3=t7=t11=-100,
    t4=t8=t12=-200;
}
//
function start(){
    move();
    start.state=true;
}
//
var selfUnits=J_g_1.getElementsByTagName("span");
function clearSite(){
    for(var i=0;i<50;i++){
        selfUnits[i].className="";
    }
}
//
function moveSelf(dir){
    for(var i=0,len=operSelf.length;i<len;i++){
        switch(dir){
            case "up":
                operSelf[i].y--;
                if(operSelf[i].y<0){
                    operSelf[i].y=0;
                }
                break;
            case "down":
                operSelf[i].y++;
                if(operSelf[i].y>4){
                    operSelf[i].y=4;
                }
                break;
            case "left":
                operSelf[i].x--;
                if(operSelf[i].x<0){
                    operSelf[i].x=0;
                }
                break;
            case "right":
                operSelf[i].x++;
                if(operSelf[i].x>9){
                    operSelf[i].x=9;
                }
                break;
            default:;
        }
    }
    clearSite();
    draw(J_g_1,operSelf);
}

document.onkeydown=function(event){
    var e = event || window.event;
    var n = e.keyCode;
    console.log(n);
    switch(n){
        //enter
        case 13:
            start();
            break;
        case 27:
            stop();
            break;
        case 37:
            console.log("left");
            moveSelf("left");
            break;
        case 38:
            console.log("up");
            moveSelf("up");
            break;
        case 39:
            console.log("right");
            moveSelf("right")
            break;
        case 40:
            console.log("down");
            moveSelf("down");
            break;
        //"W"键,提早提示障碍物位置
        case 87:
            warning();
            break;
        default:; 
    }
};
