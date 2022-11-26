// 完成rem适配 
function setRem(){
    var clientWidth=document.clientWith||document.body.clientWidth;
    // console.log(clientWidth)
    // 屏幕最大1920
    clientWidth=clientWidth>1920? 1920:clientWidth;
    clientWidth=clientWidth<1024? 1024:clientWidth;

    //我的电脑 clientWidth是1280  为了让每一个rem等于80  要/24
    var rem=clientWidth/16;
    // console.log(rem)
    var html=document.getElementsByTagName('html')[0]
    html.style.fontSize=rem+'px'

}


window.onload=setRem;
window.onresize=setRem;