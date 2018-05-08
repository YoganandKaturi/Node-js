var fs = require('fs');
fs.open('file2.txt','w',function(err){
		if(err) throw err;
		console.log('file opened in write mode');
})