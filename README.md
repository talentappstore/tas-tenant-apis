Aotal's tenant API definitions for Talent App Store
===================================
This repository contains [Aotal's tenant API definitions](http://talentappstore.github.io/tas-tenant-apis/) and supporting documentation for [Talent App Store](https://www.talentappstore.com), an open marketplace for HR microservices (aka apps).

These are most of the APIs that we use when building our own apps for Talent App Store. They are open and can be freely used by anyone. Although Aotal is the company behind Talent App Store, Aotal's API definitions have no special status. Any developer can use them, copy them or fork them if required (we'd rather you shared your challenges though, so that we can try to address them).


Getting around
------------
An index of all of the documentation is at http://talentappstore.github.io/tas-tenant-apis.

The API definitions themselves are in raml (currently 0.8), which is then processed into html for easier browsing. The main raml document, which at this time focuses on recruitment, is at http://talentappstore.github.io/tas-tenant-apis/generated/recruitment.raml.html.     

The request and response bodies of virtually all of Aotal's APIs are in json schema format. There are comprehensive examples in json that match to the schemas.    

There are also several walkthrough documents, which contain blow by blow descriptions of the sequence of API calls between apps to complete some scenario, such as posting a job to a job board.


Building the generated contents of this repository
----------------------------------------
After changing the source, update the generated output by using the tools from the tas-des-static repository at https://github.com/talentappstore/tas-des-static.

As well as generating html files, the build process also validates the raml and tests every json example against its corresponding json schema.
