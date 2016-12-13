/**
 * Created by kingzhibo on 2016/11/23.
 */
(function () {


    function firstShow() {
        var i=9;
        var count=document.querySelector('.first-show-count');
        var page=document.querySelector('#first-show');
        var close=document.querySelector('.close');

        close.onclick=function(){
             page.style.display='none';
        }
        var id=setInterval(function () {
            i--;
            count.innerHTML=i;
            if(i<0){
                clearTimeout(id)
            }
        },1000);

        setTimeout(function () {
            page.style.display='none';
        },i*1000)
    }



  

    var toTop=document.getElementById('toTop');
    window.onscroll=function(){

        if(document.documentElement.scrollTop||document.body.scrollTop>500){
            toTop.style.display='block'
        }else{
            toTop.style.display='none'
        }
    }
    
       



   function init() {
       firstShow()
   }
    init()




})()