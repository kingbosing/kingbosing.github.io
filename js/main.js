/**
 * Created by kingzhibo on 2016/11/23.
 */
(function () {


    function firstShow() {
        var i=9;
        var count=document.querySelector('.first-show-count');
        var page=document.querySelector('#first-show');
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






   function init() {
       firstShow()
   }
    init()




})()