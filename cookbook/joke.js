@@ -1,8 +1,8 @@

$(function(){

	/*Ц��ajax��ȡ*/
	function getJoke(){
	/*ͼƬЦ��ajax��ȡ*/
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
	

	/*����Ц��ajax*/
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
	/*��������*/
	function create_content(data){
		console.log(data[0])
		var jokeMain=document.getElementById('joke_main')
		
		var jokeDiv=$('<div>')
		for(var i=0;i<data.length;i++){
			
@@ -35,20 +53,52 @@ $(function(){
		jokeDiv.appendTo(jokeMain)
	}


 
 	var ifPic=true;
 	/*���ظ���*/
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

	/*�������ͺ�ͼƬ�����л�*/
	function jokeType(){
		$('#jokeType').click(function(e){
				if(e.target.innerText=='������'){
					jokeMain.innerHTML=' ';
					getJoke();
					ifPic=false;
					$('#jokeTypePic').css('background','#fff');
					$('#jokeTypeL').css('background','green');
				}
				
				if(e.target.innerText=='ͼƬ��'){
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