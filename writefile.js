var fs = require('fs');
fs.writeFile('file2.txt','New content is written into text file',function(err){
		if(err) throw err;
		console.log('content is written');
})