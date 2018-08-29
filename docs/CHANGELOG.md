2.02
====
New APIs
	GET /assessmentTypes/me/forJob/byID/{job}   
	PATCH /jobBoards/forApp/status
	GET /jobBoards/forApp/status.
	GET /jobBoards/forApp/postingUI/byID/{posting}
	PATCH /postings/byID/{id}/appDetails

Change (non-breaking) - added additional fields to job boards. Affects:
	GET /jobBoards/forApp

Change (non-breaking) - make PII fields consistent in person.json

Change (breaking) - remove appCommunicatesDirectlyToCandidate from assessmentType.json. Affects:
	GET /assessmentTypes
	GET /assessmentTypes/byID/{}

Change (non-breaking) - add notificationRule to candidateEditSpec.json. Affects:
    POST /editSpecs/fetches/apply/{job}/me
    POST /editSpecs/fetches/apply/{job}/anonymous
    POST /editSpecs/fetches/register/me
    POST /editSpecs/fetches/register/anonymous

Add schemas
	postingFieldMeta.json
	postingFieldMetaGroup.json
	postingFieldMetaGroups.json

Change (breaking) - remove commonFields from job board object and replace with fields array. Affects:
	GET /jobBoards
	GET /jobBoards/forApp

2.01
====
Change (non-breaking) - added optional field "sortable" to assessment types, allowing assessment apps to indicate that their results can be sorted. Affects:
    GET /assessmentTypes/forApp
    GET /assessmentTypes 

New APIs
    POST /assessments/strips/byAssessmentType/{assessmentType}/forApplications/fetches
    POST /assessments/sorts

Change (non-breaking) - added optional field "embedMeta" to allow fetching item metadata at same time as results. Affects:
	GET /applications

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
