app.service('AppDomain',function(){
	
	var registry = {};
	
	this.addComponentRegistry = function(name,classname){
		registry.name = classname;
	}
	
	this.getDefinition = function(name){
		if(registry.name && typeof registry.name == "function"){
		   	return registry.name;
		}
	}
	
});