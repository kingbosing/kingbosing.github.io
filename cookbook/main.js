var app=angular.module('text' ,[]);




$.ajax({
	type:'get',
	url:'http://apicloud.mob.com/v1/cook/category/query?key=1b565ab0f27a4',
	dataType:'json',
	success:function(response){
		console.log(response)
	},
	error:function(response) {
		console.log(response)
	}
})

/*自定义过滤器
*数据Html输入
*/
app.filter('showAsHtml',function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
});


/*分类，列表页面*/
app.controller('siteCtrl',function($scope ,$http){


	/*数据请求
	*Url
	*Type
	*successBack
	*errorBack
	*/
	function getHttp(Url,Type,successBack,errorBack){
		$http({		
			url:Url,
			headers:{'apikey':'2917621e70e41503b304c671e11407bb'},
			type:Type
		}).success(
			successBack
		).error(
			errorBack
		);
	}

	/*菜谱分类*/
	getHttp(
		'http://apis.baidu.com/tngou/cook/classify',
		'get',
		function(response){
			console.log(response)
			$scope.classify=response.tngou;
		},
		function() {
			console.log(222)
		}
		)
	
	/*菜谱列表*/
	getHttp(
		'http://apis.baidu.com/tngou/cook/list',
		'get',
		function(response){
			console.log(response)
			$scope.list=response.tngou;
		},
		function() {
			console.log(222)
		}
		)
	

	/*菜谱分类列表*/
	$scope.getMore=function(id){
		getHttp(
				'http://apis.baidu.com/tngou/cook/list?id='+id+'&page='+'2',
				'get',
				function(response){
					console.log(response);
					$scope.classify_list=response.tngou;		
				},
				function() {
					console.log(222)
				}
				)	
	}

	/*菜品搜索*/
	$scope.getList=function (value){
		console.log(value)

	}





})






/*菜单详情页面*/
app.controller('menu',function($scope ,$http){
	var id=location.search.substring(1).split('=')[1];
	console.log(id)
	$http({
		url:'http://apis.baidu.com/tngou/cook/show?id='+id,
		headers:{'apikey':'2917621e70e41503b304c671e11407bb'},
		type:'get'
		
	}).success(function(response){
		$scope.content=response;
		console.log(response)
		
	
	}).error(function() {
		console.log(222)
	});
})


$.ajax({
	type:'post',
	url:'http://apis.baidu.com/tngou/cook/show',
}).success(function(data){
	console.log(data)
})

