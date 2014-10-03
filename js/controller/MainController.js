app.controller('MainController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    
		
	$rootScope.changeState = function(statename){
         angular.forEach($rootScope.config.state,function(value,key){
			 if(value.name && value.name == statename){
			     $rootScope.screenName = $scope.screenName = value.url;
            	 $scope.$apply();
			 }
		 })
	}
	
	$rootScope.onStateChange = function(name){
		$rootScope.$broadcast("stateChange",name);
	}
	$scope.componentFactory = {
		"button" : "getButtonFactory",
		"label" : "getLabelFactory"
	};
	
	$scope.currId = "";	
		
	$http({method: 'GET', url: 'js/config.json'})
	.success(function(data, status, headers, config) {
		$scope.name = data.state[data.state.initialScreen].name;
		$scope.screenName = data.state[data.state.initialScreen].url;
		
		$rootScope.config = data;
		
	})
	.error(function(){
		
	})
	
}])