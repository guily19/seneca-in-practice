var seneca = require('seneca')()

seneca.add({role: 'math', cmd: 'sum'}, function( msg, respond ){
	const sum = msg.right + msg.left;
	respond(null,{ answer: sum});
});

module.exports = seneca