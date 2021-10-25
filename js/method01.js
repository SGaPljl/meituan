var addrShow=document.getElementById("addr-show");
var prov=document.getElementById("prov");
var city = document.getElementById("city");
var country = document.getElementById("country");
var btn = document.getElementsByTagName("button")[0];


var current = {
    prov:'',
    city:'',
    country:''
};

(function showProv(){
    var len=provice.length;
    for(var i=0;i<len;i++){
        var provOpt=document.createElement("option");
        provOpt.value=provOpt.innerHTML=provice[i].name;
        prov.appendChild(provOpt);
    }
})();

function showCity(obj){
    var val=obj.options[obj.selectedIndex].value;
    // console.log(val);
    //bug处理 解决两次选择不同数据堆积的问题
    if(val != current.prov){
        current.prov = val;
        // console.log(current.prov);
        city.length = 1;   
    }
    if(val!=' '){
        var len=provice.length;
        var provIndex=0;
        for(var i=0;i<len;i++){
            if(val==provice[i].name)
            provIndex=i;
        }
        // console.log(provIndex);
        var citylen=provice[provIndex].city.length;
        // console.log(citylen);
        for(var j=0;j<citylen;j++){
            var cityOpt=document.createElement("option");
            cityOpt.value=cityOpt.innerHTML=provice[provIndex]["city"][j].name;
            city.appendChild(cityOpt);
        }
    }
}
function showCountry(obj){
    // console.log(obj);
    var val=obj.options[obj.selectedIndex].value;
    // console.log(val);

    if(val != current.city){
        current.city = val;
        // console.log(current.prov);
        country.length = 1;
    }
    var len=provice.length;
    var provIndex=0;
    for(var i=0;i<len;i++){
        if(current.prov==provice[i].name)
         provIndex=i;
    }
    var citylen=provice[provIndex]["city"].length;
    var cityIndex=0;
    for(var j=0;i<citylen;j++){
        if(current.city==provice[provIndex]["city"][j].name)
        cityIndex=j;
    }
    // console.log(provIndex);
    // console.log(cityIndex);
    if(val!=''){
        var countrylen=provice[provIndex]["city"][cityIndex].districtAndCounty.length;
        // console.log(countrylen);
        for(var n=0;n<countrylen;n++){
            var countryOpt=document.createElement("option");
            countryOpt.value=countryOpt.innerHTML=provice[provIndex]["city"][cityIndex].districtAndCounty[n];
            country.appendChild(countryOpt);
        }
        
    }
}
function selecCountry(obj){
    // console.log(obj);
    var val=obj.options[obj.selectedIndex].value;
    // console.log(val);
    current.country=val;
}
//点击提交
function showAddr(){
    // console.log(1);
    //表单按钮禁用处理  
    if(current.prov == '' || current.city=='' || current.country==''){
        btn.disabled=true;
    }else{
        addrShow.value = current.prov+'-'+current.city+'-'+current.country;
    }
}