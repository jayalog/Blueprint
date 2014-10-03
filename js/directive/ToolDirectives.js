app.directive('toolbarList', ["$rootScope", "AppDomain", function($rootScope, AppDomain){
	return {
		restrict : "C",
		link : function(scope, elem, attr){
			elem.find('[data-elem]').bind('click', function(e){
				var _elemt = angular.element(this).attr('data-elem');
				var _elemtConfig = $rootScope.config['svg'][_elemt];
				var ClassName = AppDomain.getDefinition(_elemtConfig.factoryName);
                var a = new Promise(function(success,error){
                     Snap.load(_elemtConfig.url, function(data){
                        success(data,_elemtConfig.factoryName);
                        $rootScope.$broadcast("addElement::svgEvent",data);
                     });
                }).then(function(data,factoryName){
                    var a = data.select("metadata");
					a.attr({"data-factoryname":_elemtConfig.factoryName});
					
					var instance = new ClassName(data);
					
                })
                   
			});
			
		}
	}
}]);

app.directive('propertyBox', ["$rootScope", function($rootScope){
	return{
		restrict : "C",	
		link : function(scope, element, attr){
			element.find('.property-options').load('templates/svgOptions.html');
			$rootScope.$on('curElement', function(event, obj){
				element.find('.property-options').load($rootScope.config["elementOption"][obj.attr('id')]);
			});
			
			element.find('.property-close').click(function(){
				scope.showPropBox = false;
				scope.$apply();
			});
			
			element.find('#custom-property').click(function(){ alert(element.find('.readonly'));
				element.find('.readonly').removeAttr('readonly');
			});
		}
	}									  
}]);