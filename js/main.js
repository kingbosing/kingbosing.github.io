/**
 * Created by kingzhibo on 2016/11/23.
 */
(function () {

    function swiper(){
        var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : true
                    }
                });

    };
        
   
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
    };



  
    function toTOP(){
        var toTop=document.getElementById('toTop');
        window.onscroll=function(){

            if(document.documentElement.scrollTop||document.body.scrollTop>500){
                toTop.style.display='block'
            }else{
                toTop.style.display='none'
            }
        }
    };
    
    
       
      
  

   function init() {
       firstShow();
       swiper();
       toTOP();
       
       
   }
    init();




})()