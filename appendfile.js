var fs = require('fs');
fs.appendFile('file1.txt','text is appended',function(err){
		if(err) throw err;
		console.log('appended');
})