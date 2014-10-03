app.run(["AppDomain", function(AppDomain){
	var Label = function(el){
		this.el = el;
		
		console.log(this.el)
		
	};
	
	Label.prototype.setPosition = function(x,y){
         
	}
    
    Label.prototype.setText = function(text){
		//$(this.el).find('rect').attr('width', width);
	}
    Label.prototype.setFontColor = function(color){
		//$(this.el).find('rect').attr('width', width);
	}
    Label.prototype.setFontFamily = function(family){
		//$($(this.el).find('text')).attr('font-family', family);
	}

	Label.prototype.setFontSize = function(size){
		//$($(this.el).find('text')).attr('font-size', size);
	}
	
	AppDomain.addComponentRegistry("Label",Label);
}]);
