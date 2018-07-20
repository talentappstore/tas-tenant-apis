var versions = [2.01];

function detectVersion() {
	
	var version = 'Latest';
	
	// look for a specific version in the url - if present, it will be a number, immediately before the /docs/ path element 
	var paths = window.location.pathname.split('/');
	var docsIndex = paths.indexOf('docs');
	if (docsIndex > 1) {
		var versionStr = paths[docsIndex - 1];
		if (versionStr.typeof == 'number') {
//			console.log('versionStr is a number ' + versionStr);
			version = versionStr;
		}
	}
	
	// populate dropdown with all versions, select current one
	var dropDown = document.getElementById("versionList");
	
	var option = document.createElement("option");
	option.value = "Latest";
	option.text = "Latest";
	dropDown.add(option);
	dropDown.value = "Latest";
	
	versions.forEach(function(s) {
		option = document.createElement("option");
		option.value = s;
		option.text = s;
		dropDown.add(option);
		if (s == version) {
			console.log('detected version ' + s)
	//		option.selected = true;
			dropDown.value = s;
		}
	} );
	
	// attach a click handler to navigate to the home page for that version
	dropDown.onchange = function () {
		console.log('changed - now ' + dropDown.value);
		if (dropDown.value != 'Latest')
			window.location.pathname = '/v/' + dropDown.value + '/doc/home.html';
		else
			window.location.pathname = '/doc/home.html';
	}
	
}

