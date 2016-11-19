/**
 * Created by Administrator on 2016/9/14 0014.
 */
(function () {
    var canvas=document.getElementById('canvas');
    var king=canvas.getContext('2d');


    var draw=function (deg) {
        king.lineWidth=25;
        for(var i=1;i<=360;i++){
            var red=200;
            var green=150;
            var blue=170;
            var alpha=i/360;
            king.beginPath();
            // king.strokeStyle='rgba('+[red,green,blue,alpha].join(',')+')';
            king.strokeStyle='rgba('+red+','+green+','+blue+','+alpha+')';
            // king.strokeStyle='rgba(200,150,170,'+alpha+')';

            king.arc(250,250,200,(i-1+deg)*Math.PI/180,(i+deg)*Math.PI/180);
            king.stroke();
        }

    };

    var deg=0;
    setInterval(function () {
        king.clearRect(0,0,500,500);
        deg++;
        draw(deg)

    },10);





    
    
})();