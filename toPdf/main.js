document.getElementById("btn-Pdf").onclick = function(){
    console.log(99)
    getPdf()
    //  console.log(ToPng())

}




function getPdf(){
                html2canvas(document.getElementById("content"), {
                    onrendered: function (canvas) {

                        var contentWidth = canvas.width;
                        var contentHeight = canvas.height;

                        //一页pdf显示html页面生成的canvas高度;
                        var pageHeight = contentWidth / 592.28 * 841.89;
                        //未生成pdf的html页面高度
                        var leftHeight = contentHeight;
                        //页面偏移
                        var position = 0;
                        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                        var imgWidth = 595.28;
                        var imgHeight = 595.28 / contentWidth * contentHeight;

                        var pageData = canvas.toDataURL('image/jpeg', 1.0);

                        var pdf = new jsPDF('', 'pt', 'a4');

                        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                        //当内容未超过pdf一页显示的范围，无需分页
                        if (leftHeight < pageHeight) {
                            pdf.addImage(pageData, 'png', 10, 0, imgWidth, imgHeight);
                        } else {
                            while (leftHeight > 0) {
                                pdf.addImage(pageData, 'png', 10, position, imgWidth, imgHeight)
                                leftHeight -= pageHeight;
                                position -= 841.89;
                                //避免添加空白页
                                if (leftHeight > 0) {
                                    pdf.addPage();
                                }
                            }
                        }

                        pdf.save('content.pdf');
                    }
                })
            }

function ToPng(name){


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
            doc.addImage(imgData, 'PNG', 0, 0,190,277);        
            doc.save('999.pdf');
           
        }
    });
}
