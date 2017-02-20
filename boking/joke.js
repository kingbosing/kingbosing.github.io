
$(function(){

	/*图片笑话ajax获取*/
	function getPhotoJoke(){
		$.ajax({
		url:'http://v.juhe.cn/joke/randJoke.php',
		type:'GET',
		dataType:'jsonp',
		data:'key=3ff69896645a03336c89f96b5838a1f6&type=pic',
		success: function(data){
			var Data=data.result;
			// console.log(Data);
			create_content(Data);
		},
		error:function(error){
			console.log(error);
		}

	});
	}

	/*文字笑话ajax*/
	function getJoke(){
		$.ajax({
		url:'http://v.juhe.cn/joke/randJoke.php',
		type:'GET',
		dataType:'jsonp',
		data:'key=3ff69896645a03336c89f96b5838a1f6',
		success: function(data){
			var Data=data.result;
			// console.log(Data);
			create_content(Data);
		},
		error:function(error){
			console.log(error);
		}

	});
	}

var jokeMain=document.getElementById('joke_main')
	/*创造内容*/
	function create_content(data){
		
		var jokeDiv=$('<div>')
		for(var i=0;i<data.length;i++){
			
			$('<h3></h3>').addClass('joke_h3').text(data[i].content).appendTo(jokeDiv);
			$('<img>').attr('src',data[i].url).addClass('joke_img').appendTo(jokeDiv);
		}
		
		jokeDiv.appendTo(jokeMain)
	}

 
 	var ifPic=true;
 	/*加载更多*/
	function getMoreJoke(){
		
			$('#get_more').click(function(){
				if(ifPic){
					getPhotoJoke();
				}else{
					getJoke();
				}
			})
	};

	/*文字类型和图片类型切换*/
	function jokeType(){
		$('#jokeType').click(function(e){
				if(e.target.innerText=='文字类'){
					jokeMain.innerHTML=' ';
					getJoke();
					ifPic=false;
					$('#jokeTypePic').css('background','#fff');
					$('#jokeTypeL').css('background','green');
				}
				
				if(e.target.innerText=='图片类'){
					jokeMain.innerHTML=' ';
					getPhotoJoke();
					ifPic=true;
					$('#jokeTypeL').css('background','#fff');
					$('#jokeTypePic').css('background','green');
				}
				
			})
	};
	
		



		function init(){
			getPhotoJoke();
			getMoreJoke();
			jokeType();
			
		};

		init()
});





