
$(function(){
	try{
        if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            window.location.href='../index.html'
        }
    }catch(e){
    	 
    }

	/*笑话ajax获取*/
	function getJoke(){
		$.ajax({
		url:'http://v.juhe.cn/joke/randJoke.php',
		type:'GET',
		dataType:'jsonp',
		data:'key=3ff69896645a03336c89f96b5838a1f6&type=pic',
		success: function(data){
			var Data=data.result;
			console.log(Data);
			create_content(Data);
		},
		error:function(error){
			console.log(error);
		}

	});
	}
	

<<<<<<< HEAD
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

	})
	};


	var jokeMain=document.getElementById('joke_main')


	/*创造内容*/
=======

>>>>>>> parent of 5bf1eca... 1
	function create_content(data){
		console.log(data[0])
		var jokeMain=document.getElementById('joke_main')
		var jokeDiv=$('<div>')
		for(var i=0;i<data.length;i++){
			
			$('<h3></h3>').addClass('joke_h3').text(data[i].content).appendTo(jokeDiv);
			$('<img>').attr('src',data[i].url).addClass('joke_img').appendTo(jokeDiv);
		}
		
		jokeDiv.appendTo(jokeMain)
	}


	function getMoreJoke(){
		$('#get_more').click(function(){
			getJoke()
		})
	}
		



		function init(){
<<<<<<< HEAD
			// IsPC();
			getPhotoJoke();
=======
			getJoke();
>>>>>>> parent of 5bf1eca... 1
			getMoreJoke();
		}

		init()
});





