"function"!=typeof Promise.prototype.done&&(Promise.prototype.done=function(){var t=arguments.length?this.then.apply(this,arguments):this;t.then(null,function(t){setTimeout(function(){throw t},0)})});