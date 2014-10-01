#!/usr/bin/env node

var tv4 = require('tv4');
var fs=require('fs');

var args = process.argv.slice(2);

var dir = args[0];

//load individual schemas. tv4 does not (in any obvious way) report errors for missing schemas, so its important to load them! 
{
	console.log('looping to load all schemas');
	var schemafiles = [];
	var arrayOfFiles = fs.readdirSync(dir + '/schemas');
	arrayOfFiles.forEach( function (file) {
		console.log('adding schema: ' + file);
		var loadSchemaText = fs.readFileSync(dir + '/schemas/' + file);
		var loadSchema = JSON.parse(loadSchemaText);
		tv4.addSchema(file, loadSchema);
	});
	console.log('done adding schemas');
}

//now loop again, this time parsing all examples against their schemas
{
	console.log('looping to test schemas by validating their corresponding examples');
	var schemafiles = [];
	var arrayOfFiles = fs.readdirSync(dir + '/schemas');
		arrayOfFiles.forEach( function (file) {
		console.log('validating example: ' + file);
		var exampleText = fs.readFileSync(dir + '/examples/' + file);
		var example = JSON.parse(exampleText);
		var res = tv4.validateMultiple(example,
				file, // schema
				true, true); // true for check recursive and ban unknown properties
		if (res.errors.length == 0 && res.missing.length == 0 && res.valid == true)
			; // console.log("ok");
		else
			console.log(res);
//		console.log("missing schemas: " + JSON.stringify(arr, null, 4));
	});
	console.log('done validating');
}

