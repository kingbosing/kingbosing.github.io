@@ -1,8 +1,8 @@

$(function(){

	/*笑话ajax获取*/
	function getJoke(){
	/*图片笑话ajax获取*/
	function getPhotoJoke(){
		$.ajax({
		url:'http://v.juhe.cn/joke/randJoke.php',
		type:'GET',
@@ -10,7 +10,7 @@ $(function(){
		data:'key=3ff69896645a03336c89f96b5838a1f6&type=pic',
		success: function(data){
			var Data=data.result;
			console.log(Data);
			// console.log(Data);
			create_content(Data);
		},
		error:function(error){
@@ -19,12 +19,30 @@ $(function(){

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
		console.log(data[0])
		var jokeMain=document.getElementById('joke_main')
		
		var jokeDiv=$('<div>')
		for(var i=0;i<data.length;i++){
			
@@ -35,20 +53,52 @@ $(function(){
		jokeDiv.appendTo(jokeMain)
	}


 
 	var ifPic=true;
 	/*加载更多*/
	function getMoreJoke(){
		$('#get_more').click(function(){
			getJoke()
		})
	}
		
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
			getJoke();
			getPhotoJoke();
			getMoreJoke();
		}
			jokeType();
			
		};

		init()
});