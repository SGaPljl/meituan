var phone=document.getElementsByName("phone");
var Pi=document.getElementsByTagName("i");
// console.log("phone");



// 判断手机号
phone[0].onblur=function(){
    var phoneValue=phone[0].value;
    if(phoneValue===""){
        // console.log("111");
        Pi[0].className="phone-i";
        Pi[0].innerHTML="手机号码不能为空";
    }
    else{
        var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
        if(off){
            Pi[0].className="phone-i";
            Pi[0].innerHTML="号码可以使用";
        }else{
            Pi[0].className="phone-i";
            Pi[0].innerHTML="手机号码错误";
        }
    }
}

// 创建密码
var passward=document.getElementsByName("passward");
var span=document.getElementsByTagName("span");
passward[0].oninput=function(){
    if(passward[0].value.length>1&&passward[0].value.length<5){
        span[5].style.background="red";
    } 
    if(passward[0].value.length>=5){
        span[6].style.background="#FF8900";
    }
    if(passward[0].value.length>=10&&/[A-Z]/.test(passward[0].value)){
        span[7].style.background="green";
    }
    if(passward[0].value.length<10&&(passward[0].value.length>5))
    span[7].style.background="#EEE";
    if(passward[0].value.length<=5&&(passward[0].value.length>=1))
    span[6].style.background="#EEE";
    if(passward[0].value.length<1)
    span[5].style.background="#EEE";
       
}
passward[0].onblur=function(){
     passwardValue=passward[0].value;
    
    if(passwardValue===""){
        Pi[1].className="phone-i";
        Pi[1].innerHTML="请填写密码";
    }else{
        if(passwardValue.length<8){
            Pi[1].className="phone-i";
            Pi[1].innerHTML="密码不能少于8位";
        }
    }
}

var pass=document.getElementsByName("pass");
pass[0].onblur=function(){
    var passValue=pass[0].value;
    if(passValue===passwardValue){
        Pi[2].className="phone-i";
        Pi[2].innerHTML="正确";
    }else{
        Pi[2].className="phone-i";
        Pi[2].innerHTML="密码不一致，请重新输入";
    }

}