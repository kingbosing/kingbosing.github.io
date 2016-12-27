var app=angular.module('text' ,[]);

app.filter('showAsHtml',function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
});

app.controller('siteCtrl',function($scope ,$http){
	$http({		
		url:'http://apis.baidu.com/tngou/cook/classify',
		headers:{'apikey':'2917621e70e41503b304c671e11407bb'},
		type:'get'
	}).success(function(response){
		console.log(response)
		$scope.classify=response.tngou;		
	}).error(function() {
		console.log(222)
	});
	
	$http({
		url:'http://apis.baidu.com/tngou/cook/list',
		headers:{'apikey':'2917621e70e41503b304c671e11407bb'},
		type:'get'
		
	}).success(function(response){
		console.log(response)
		$scope.list=response.tngou;
	
	}).error(function() {
		console.log(222)
	});
	$scope.getMore=function(id){
		$http({
		url:'http://apis.baidu.com/tngou/cook/list?id='+id,
		headers:{'apikey':'2917621e70e41503b304c671e11407bb'},
		type:'get'
	}).success(function(response){
		console.log(response)
	
	
	}).error(function() {
		console.log(222)
	});
		
	}

})

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



