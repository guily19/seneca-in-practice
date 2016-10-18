

var plugin = function(options) {

   this.add({role: 'math', cmd: 'sum'}, function( msg, respond ){
		const sum = parseInt(msg.right) + parseInt(msg.left);
		respond(null,{ answer: sum});
	});

   this.add({role: 'math', cmd: 'sum'}, function( msg, respond ){
   		if(!isFinite(msg.left) || !isFinite(msg.right)){
   			throw ( new Error('Expected left and right to be numbers.') );
   		}
		this.prior(
			msg
		, function(err, result){
			if(err) respond(err)
			else {
				respond(null,{ answer: result.answer, info: msg.left + ' + ' + msg.right});
			}
		})
		
	});

   this.add({role: 'math', cmd: 'sum', integer: true}, function( msg, respond ){
		const sum = Math.floor(msg.right) + Math.floor(msg.left);
		respond(null,{ answer: sum});
	});

   this.add({role: 'math', cmd: 'product'}, function( msg, respond ){
		const product = msg.right * msg.left;
		respond(null,{ answer: product});
	});

   return 'operations'
}

module.exports = plugin;