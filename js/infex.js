// 轮播图
var bodyFloat1 = document.getElementsByClassName("body-center-center-float1")[0];
var links=document.getElementById("links");
var image=document.getElementById("image");
var floatL=document.getElementsByClassName("float-l")[0];
var floatR=document.getElementsByClassName("float-r")[0];
var numberList=document.getElementsByClassName("number")[0].getElementsByTagName("li");
var add=0;
image.src="./images/ad01.jpg";
function lunbo(){
    lun=setInterval(function(){
        add++;
        if(add>6){
             add=1;
        }
        image.src="./images/ad0"+add+".jpg";
        point();
    },1000)  
    point();     
}
// 鼠标移到对应下标切换对应图片
for(var i=0;i<numberList.length;i++){
    numberList[i].onmouseover=function(){
        add=this.innerHTML;
        image.src="./images/ad0"+add+".jpg";
        point();
    }
}
// 鼠标移到对应下标，样式改变
function point(){
    var x=add-1;
    for(var j=0;j<numberList.length;j++){
        numberList[j].style.background="#fff";
        numberList[j].style.opacity=0.5;
        if(x==j){
            numberList[j].style.opacity=1;
        }
    }
}
// 移动到图片停止轮播
bodyFloat1.onmouseover = function () {
    clearInterval(lun);
    floatL.style.display="block";
    floatR.style.display="block";
}
bodyFloat1.onmouseout = function(){
    lunbo();
    floatL.style.display="none";
    floatR.style.display="none";
}

floatL.onclick=function(){
    add-=1;
    if(add<1){
        add=6;
    }
    image.src="./images/ad0"+add+".jpg";
    point();
}
floatR.onclick=function(){
    add+=1;
    if(add>6){
        add=1;
    }
    image.src="./images/ad0"+add+".jpg";
    point();
}
lunbo();






// 猫眼电影
var floatL2=document.getElementsByClassName("float-l")[1];
var floatR2=document.getElementsByClassName("float-r")[1];
var movieImg=document.getElementsByClassName("movie-center-img")[0];
var imgList=movieImg.getElementsByTagName("li");
var movieNav=document.getElementsByClassName("movie-center-nav")[0];
var movieList=movieNav.getElementsByTagName("li");
// 箭头显示与隐藏
movieImg.onmouseover = function () {
    floatL2.style.display="block";
    floatR2.style.display="block";
}
movieImg.onmouseout = function(){

    floatL2.style.display="none";
    floatR2.style.display="none";
}
// 点击箭头切换图片
floatL2.onclick=function(){
    var a=6;
        for(var i=0;i<imgList.length;i++){
        imgList[i].children[0].setAttribute("src","./images/mm"+a+".jpg");
        a++;
    }
}
floatR2.onclick=function(){
    var a=1;
    console.log(a);  
        for(var i=0;i<imgList.length;i++){
        imgList[i].children[0].setAttribute("src","./images/mm"+a+".jpg");
        a+=1;
    }
    
}
// 三角形的显示与隐藏
for(let i=1;i<movieList.length;i++){
    var a=0;
    if(i==movieList.length||i==movieList.length-1){
        continue;
    }
    movieList[i].onmouseover=function(){
        this.children[0].style.display="block";
        if(i==1){
            var a=6;
            for(var j=0;j<imgList.length;j++){
                imgList[j].children[0].setAttribute("src","./images/mm"+a+".jpg");
                a++;
            }
        }
        else if(i==2){
            a=1;  
            for(var j=0;j<imgList.length;j++){
                imgList[j].children[0].setAttribute("src","./images/mm"+a+".jpg");
                a+=1;
            }
        }
        for(let j=1;j<movieList.length;j++){
            if(j==movieList.length||j==movieList.length-1){
                continue;
            }
            if(j!=i){
                movieList[j].children[0].style.display="none";
            }
        }
    }
}





// 推荐民宿
var hotelNav=document.getElementsByClassName("hotel-center-nav")[0];
var hotelList=hotelNav.getElementsByTagName("li");
// console.log(hotelList);
for(let i=1;i<hotelList.length;i++){
    if(i==hotelList.length||i==hotelList.length-1){
        continue;
    }
    hotelList[i].onmouseover=function(){
        this.children[0].style.display="block";
        for(let j=1;j<hotelList.length;j++){
            if(j==hotelList.length||j==hotelList.length-1){
                continue;
            }
            if(j!=i){
                hotelList[j].children[0].style.display="none";
            }
        }
    }
}

// 右拉菜单
var bodyCenterLeft=document.getElementsByClassName("body-center-left")[0];
var leftList=bodyCenterLeft.getElementsByTagName("li");
// console.log(leftList);
for(var i=0;i<leftList.length;i++){
    if(i==2){
        leftList[i].onmouseover=function(){
            this.children[2].style.display="block";
        }
        leftList[i].onmouseout=function(){
            this.children[2].style.display="none";;
        }
    }else{
        leftList[i].onmouseover=function(){
            this.children[3].style.display="block";
        }
        leftList[i].onmouseout=function(){
            this.children[3].style.display="none";;
        }
    }
    
}