// 下拉菜单
var dropdow = document.getElementById("dropdow");
var dropdownList = dropdow.getElementsByTagName("li");
var displaynone = document.getElementsByClassName("displaynone")[0];
// console.log(dropdownList)

for(var i=0;i<dropdownList.length;i++){
    if(i==1){
        continue;
    }
    dropdownList[i].onmouseover=function(){
        this.children[1].style.display="block";
     }
     dropdownList[i].onmouseout=function(){
        this.children[1].style.display="none";
     }
}
