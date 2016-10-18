var seneca = require('seneca')()
seneca.add( {role: 'greetings', cmd: 'hello'}, function( msg, respond ) {
    var hello = "Hello " + msg.name;
    respond( null, { answer: hello });
});

module.exports = seneca;