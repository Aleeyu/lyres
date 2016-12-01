/**
 * Created by 75339 on 2016/11/3.
 */

//返回数组中所有元素的平均值
if(!window.jQuery){
    throw new Error("没有jquery依赖");
}
jQuery.ly={};
jQuery.ly.avg=function(arr){
    var sum=0;
    for(var i in arr){
        sum+=arr[i];
    }
    return sum/arr.length;
}
//返回数组中所有元素的最大值
jQuery.ly.max=function(arr){
    var m=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>m){
            m=arr[i]
        }
    }
    return m;
}
//返回数组中所有元素的最小值
jQuery.ly.min=function(arr){
    var m=arr[0];
    for(var i=1;i<arr.lenth;i++){
        if(arr[i]<m){
            m=arr[i]
        }
    }
    return m;
}
//返回金额格式化如123123213。68768返回123,123，213.00
jQuery.ly.money=function(money){
    var prefix = money<0?"-":"";//前缀 是否有负号
    money = Math.abs(money).toFixed(2);//取绝对值 并保留两位小数
    var index = money.indexOf(".");//小数点的位置
    var suffix = money.substring(index);//后缀 小数点及其两位小数
    var newMoney = ""; //格式化后的金额字符串
    while(true){
        if(index-3<=0){
            newMoney =  money.substring(0,index)+newMoney;
            break;
        }
        newMoney =","+money.substring(index-3,index)+newMoney ;
        index -= 3;
    }
    return prefix+ newMoney + suffix;
}
//console.log($.ly.money(121231))
// *********************//
// 判断字符串是否是由4个字节组成//is32Bit("𠮷") // true,is32Bit("a") // false
// *******************//
jQuery.ly.is32Bit=function(string) {
  return string.codePointAt(0) > 0xFFFF;
}