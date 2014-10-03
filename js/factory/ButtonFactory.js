app.run(["AppDomain",function(AppDomain){
	var Button = function(el){
		this.el = el;
	};
	
    /*Button.prototype.setLabel = function(label){
       
    }

	Button.prototype.setText = function(text){
		$(this.el).find('rect').attr('width', width);
	}
	Button.prototype.setWidth = function(width){
		$(this.el).find('rect').attr('width', width);
	}
	Button.prototype.setHeight = function(height){
		$(this.el).find('rect').attr('width', height);
	}*/
	
	AppDomain.addComponentRegistry("Button",Button);
	
}]);