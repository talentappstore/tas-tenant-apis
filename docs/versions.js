var versions = [2.01];

function detectVersion() {
	
	// see if the path starts with /v/version, otherwise assume we are at Latest 
	var version = 'Latest';
	var paths = window.location.pathname.split('/');
	if (paths[1] == "v")
		version = parseFloat(paths[2]);
	
	console.log('paths[2].typeof is ' + paths[2].typeof);
	console.log('paths[2] is ' + paths[2]);
	console.log('version is ' + version);
	
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

