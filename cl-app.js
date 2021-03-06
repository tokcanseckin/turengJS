#! /usr/bin/env node
var tureng = require('./tureng.js');
tureng(process.argv[2], function(error, data) {
	if(error) {
		console.log(error.message);
	} else {
		data.categories.forEach(function (category) {
			console.log('\n' + category.name);
			category.results.forEach(function (result) {
				console.log(result.type + ' ' +
							result.english + ' ' +
							result.turkish);
			});
		});
	}
});