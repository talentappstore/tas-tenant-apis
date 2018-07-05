Unversioned
===========
Change (non-breaking) - added optional field "sequence" to categoryValue.json for ordering of nodes. Affects:
	POST /categories/byID/{}/values
	GET /categories/byID/{}/values/remapped
	GET /categories/byID/{}/values/byID/{}
	POST /categories/byID/{}/values/byID/{}/deltaPings
	POST /categories/byID/{}/values/byID/{}/changeImpact
	POST /orgs/values
	GET /orgs/values/byID/{}
	GET /jobBoards/forApp/categories/byID/{category}/values
	GET /orgs/values
	POST /categories/byID/{category}/values/uploads
	POST /orgs/values/uploads
New API
	PATCH /applications/byID/{}

2.01
====
First published version

