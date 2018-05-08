var fs = require('fs');
fs.rename('file2.txt','file.txt',function(err){
		if(err) throw err;
		console.log('file is renamed');
})