var fs = require('fs');
var process = require('process');

var fileName = process.argv[2]
if (!fs.existsSync(fileName)) {
	console.error(`File ${fileName} not found. Usage: node process.js inputFile > outputFile`)
	process.exit(1)
}

var arr = JSON.parse(fs.readFileSync(fileName, 'utf8'));

console.log(`word n`);
arr.forEach((words, i) => {
	if (words.length > 0) {
		let pseudoFrequency = Math.round(1000000000 / i)
		words.forEach((word) => {
			console.log(`${word}\t${pseudoFrequency}`);
		});
		
		if (i % 1000 === 0) {
			console.error(`${i} ...`);
		}
	} 
});