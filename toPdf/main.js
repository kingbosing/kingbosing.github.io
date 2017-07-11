document.getElementById("btn-Pdf").onclick = function(){
    console.log(99)
    ToPng()
    //  console.log(ToPng())

}


function ToPng(){

var dom=$("#content"); //你要转变的dom
    var width = dom.width();
    var height = dom.height();
    var type = "png";
    var scaleBy = 3;  //缩放比例
    var canvas = document.createElement('canvas');
    canvas.width = width * scaleBy;
    canvas.height = height * scaleBy+35;  //35是我处理完后发现短了一点，具体为什么不清楚,如果你也少的话，根据自己的项目调吧
    canvas.style.width = width * scaleBy + 'px';
    canvas.style.height = height * scaleBy + 'px';
    var context = canvas.getContext('2d');
    context.scale(scaleBy, scaleBy);
      // 将 id 为 content 的 div 渲染成 canvas
   html2canvas(document.getElementById("content"), {

        // 渲染完成时调用，获得 canvas
        onrendered: function(canvas) {

            console.log(canvas)
            // 从 canvas 提取图片数据

            var imgData = canvas.toDataURL('image/png',1.0);

            // canvas.scale(2,2);
        // var image = new Image();
        // image.src = canvas.toDataURL('image/png');
        // return image;
        
        //   console.log(image)
            //                               |
            // |—————————————————————————————|                     
            // A0 841×1189                           
            // A1 594×841                            
            // A2 420×594                            
            // A3 297×420                            
            // A4 210×297                            
            // A5 148×210                            
            // A6 105×148                            
            // A7 74×105                             
            // A8 52×74                              
            // A9 37×52                              
            // A10 26×37             
            //     |——|———————————————————————————|
            //                                 |——|——|
            //  
                                         
            var doc = new jsPDF("p", "mm", "a4");
            doc.addImage(imgData, 'PNG', 0, 0,210,297);        
            doc.save('content.pdf');
           
        }
    });
}
