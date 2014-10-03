app.directive('initScreen', function($rootScope){
	return {
		restrict: 'A',
		link : function(scope, ele, attr){
				var onCreateClickHandler = function(event){
					   $rootScope.config.width = ele.find('#width').val();
					   $rootScope.config.height = ele.find('#height').val();
					   
					   $rootScope.contStyle = {"width":$rootScope.config.width+"px"}
					   
					   $rootScope.showToolbar = true;
					   $rootScope.showPropBox = true;
					   
					   $rootScope.changeState("main");
					   
				}
				ele.find('.homeDialogBtnPrimary').bind('click',onCreateClickHandler);
		}
	}

});


app.directive('mainScreen', function($rootScope){
	return {
		restrict: 'A',
		link : function(scope, ele, attr){
				
				var onAddElementHandler = function(event,data){
					var _svgElem = Snap('.svg-cntr-grp');
				    _svgElem.append(data);
					Snap(data.select('g')).limitDrag({ x: 0, y: 0, minx: 0, miny: 0, maxx: $rootScope.config.width, maxy: $rootScope.config.height});
				    Snap(data.select('g')).mousedown(showProp);
				    Snap('.svg-container').mousedown(showProp);
				}
				
				var showProp = function(event, data){ 
				   $rootScope.showPropBox = true;
				   $rootScope.$apply();
				   $rootScope.$broadcast("curElement", this);
				   event.stopPropagation();
			    }
				
				$rootScope.$on("addElement::svgEvent",onAddElementHandler);
			}
	}

});