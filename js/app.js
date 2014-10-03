/* Snap SVG pulgin for drag*/
(function() {



  Snap.plugin( function( Snap, Element, Paper, global ) {
    
	/*implementing observer pattern in Snap svg element*/
			
	Element.prototype.__callbacks = {};
    Element.prototype.on = function(eventtype,callback){
	 if(!this.__callbacks[eventtype])
    this.__callbacks[eventtype] = $.Callbacks();
    
    this.__callbacks[eventtype].add(callback);
    }
    Element.prototype.off = function(eventtype,callback){
	 if(!this.__callbacks[eventtype])
      return;
    
    this.__callbacks[eventtype].remove(callback);
    }
	Element.prototype.trigger= function(eventtype,data){
		if(!this.__callbacks[eventtype])
		  return;
		
		this.__callbacks[eventtype].fire(data);
	}
	
	Element.prototype.limitDrag = function( params ) {
		this.data('minx', params.minx ); this.data('miny', params.miny );
		this.data('maxx', params.maxx ); this.data('maxy', params.maxy );
		this.data('x', params.x );    this.data('y', params.y );
		this.data('ibb', this.getBBox() );
		this.data('ot', this.transform().local );
		this.drag( limitMoveDrag, limitStartDrag );
		return this;	
	};

	function limitMoveDrag( dx, dy ) {
		var tdx, tdy;
		var sInvMatrix = this.transform().globalMatrix.invert();
	    	sInvMatrix.e = sInvMatrix.f = 0; 
	    	tdx = sInvMatrix.x( dx,dy ); tdy = sInvMatrix.y( dx,dy );

		this.data('x', +this.data('ox') + tdx);
		this.data('y', +this.data('oy') + tdy);
		if( this.data('x') > this.data('maxx') - this.data('ibb').width  ) 
			{ this.data('x', this.data('maxx') - this.data('ibb').width  ) };
		if( this.data('y') > this.data('maxy') - this.data('ibb').height ) 
			{ this.data('y', this.data('maxy') - this.data('ibb').height ) };
		if( this.data('x') < this.data('minx') ) { this.data('x', this.data('minx') ) };
        	if( this.data('y') < this.data('miny') ) { this.data('y', this.data('miny') ) };
		this.transform( this.data('ot') + "t" + [ this.data('x'), this.data('y') ]  );
        this.trigger("dragMove",{x:this.data('x'),y:this.data('y')})
	};

	function limitStartDrag( x, y, ev ) {
		this.data('ox', this.data('x')); this.data('oy', this.data('y'));
		this.trigger("dragStart",{x:this.data('x'),y:this.data('y')})
	};
  });
  
  
  
  
})();


var app = angular.module('blueprint', []);