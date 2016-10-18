var seneca = require('./math')
var plugin = require("./plugin")

var left = parseFloat(process.argv[2]);
var right = parseFloat(process.argv[3]);


seneca.use( plugin, {} )
seneca.ready(function (err) {
    seneca.act({role: 'math', cmd: 'sum', left: left, right: right},
	    function (err, result) {
	        if (err) return console.error (err)
	        console.log(result)
	    })
	seneca.act({role: 'math', cmd: 'sum', integer: true, left: left, right: right},
	    function (err, result) {
	        if (err) return console.error (err)
	        console.log(result)
	    })
})