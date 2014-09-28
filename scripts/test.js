#!/usr/bin/env node

var raml2html = require('raml2html');

// Using the default templates:
// source can either be a filename, url, file contents (string) or parsed RAML object
var config = raml2html.getDefaultConfig(true); // https is a boolean, true means https links will be used instead of http
raml2html.render('/home/abraae/lhome/tas/git/tas-tenant-apis/raml/test.raml', config,
		function() {console.log('succeeded')}, // onSuccess
		function() {console.log('failed')} // onError
		);


