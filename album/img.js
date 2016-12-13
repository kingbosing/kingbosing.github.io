/**
 * Created by Administrator on 2016/10/21 0021.
 */
(function () {
    window.zsj=window.zsj||{};
    function createImg(Url,x,y,width,height,startIndex) {
        this._x=x;
        this._y=y;
        this._height=height;
        this._width=width;
        this._url=Url;
        this._startIndex=startIndex;
        this._changeX=Math.random()*600-300;
        this._changeY=Math.random()*600-300;
        this._angle=(Math.random()*4-2)*Math.PI;
        this._styleIndex=Math.floor(Math.random()*3);
        this._endIndex=(startIndex/800+1)*800;
    }
    var p=createImg.prototype;
    p.drawImg=function (context,index) {
//         console.log(1);
		var self=this;
        var img=new Image();
         img.src=this._url;
       
//      console.log(img);
//	img.onload=function(){
//	 console.log(self._x);
	switch (self._styleIndex){
                case 0:
                    if (index-self._startIndex>=0&&index-self._startIndex<=60){
                        context.save();
                        context.translate(self._x-self._changeX,self._y-self._changeY);
                        context.rotate(self._angle*(60+self._startIndex-index)/60);
                        context.drawImage(img,self._changeX,self._changeY,self._width,self._height);
                        context.restore();
                    }else if(index-self._startIndex>60&&index-self._startIndex<self._endIndex){
                        context.save();
                        context.translate(self._x-self._changeX,self._y-this._changeY);
                        context.drawImage(img,self._changeX,self._changeY,self._width,self._height);
                        context.restore();
                    }
                    break;
                case 1:
                    if (index-self._startIndex>=0&&index-self._startIndex<=60){
                        context.save();
                        context.translate(self._x,self._y);
                        context.globalAlpha=(index-self._startIndex)/60;
                        context.drawImage(img,self._changeX*(self._startIndex+60-index)/60,self._changeY*(self._startIndex+60-index)/60,self._width,self._height);
                        context.restore();
                    }else if(index-self._startIndex>60&&index-self._startIndex<self._endIndex){
                        context.save();
                        context.translate(self._x,self._y);
                        context.globalAlpha=(index-self._startIndex)/60;
                        context.drawImage(img,0,0,self._width,self._height);
                        context.restore();
                    }
                    break;
                case 2:
                    if (index-self._startIndex>=0&&index-self._startIndex<=60){
                        context.save();
                        context.translate(self._x-self._width/2,self._y-self._height/2);
                        context.scale(60/((index-self._startIndex)/3+40),60/((index-self._startIndex)/3+40));
                        context.drawImage(img,self._width/2,self._height/2,self._width,self._height);
                        context.restore();
                    }else if(index-self._startIndex>60&&index-self._startIndex<self._endIndex){
                        context.save();
                        context.translate(self._x-self._width/2,self._y-self._height/2);
                        context.drawImage(img,self._width/2,self._height/2,self._width,self._height);
                        context.restore();
                    }
                    break;
                default:
                    break;
//		}
        }
    }
    zsj.createImg=createImg;
})();