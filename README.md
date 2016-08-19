Tenant API definitions by Aotal, for Talent App Store
=====================================================

This repository
--------------
Talent App Store is an open marketplace for HR microservices (apps).

This repository contains Aotal's API definitions for Talent App Store.


Background - about Talent App Store
---------------------------------
The APIs provided by most HR systems today follow the traditional hub and spoke model, where apps are small, clip-on appendages to a single large master system. The APIs are defined by the vendor of that master system. Apps can only use the APIs to communicate to that master system, not to each other. Communication is typically inwards, where the clip-on app calls APIs on the master system, rather than the other way around. The APIs may also have IP restrictions.

In such an environment, if the customer decides to stop using the master system, all apps stop working. This promotes a high degree of lock-in. 

By contrast, Talent App Store follows a peer to peer model. All apps are equal. Any app can call APIs on any other app (TAS calls these tenant APIs).

In TAS, a customer can uninstall any app and replace it with another, as long as the replacement consumes and produces the same set of APIs. This promotes a high degree of diversity, openness and customer choice. No app is irreplaceable. Apps compete with each other on their merits.

Because in TAS there is no single master system, there is also no single set of APIs. Any developer can define tenant APIs, and any app can produce or consume any developer's APIs.

Hence this repository, which contains Aotal's API definitions. Although Aotal is the company behind Talent App Store, Aotal's API definitions have no special status. Any developer can use them, or even fork them if required (we'd rather you shared your challenges though, so that we can try to address them). 
 

Aotal's tenant APIs
-------------------
This repository contains Aotal's tenant API definitions and supporting documentation. These are the APIs that we use when building our own apps. They are open and can be freely used by anyone. Although TAS does not mandate any data format for APIs, virtually all of our own APIs use json.

A complete index of all of the documentation is at http://talentappstore.github.io/tas-tenant-apis/.

The API definitions themselves are in RAML (currently 0.8), which are then processed into html form for easier browsing.

The main RAML document, which at this time focuses on recruitment, is at http://talentappstore.github.io/tas-tenant-apis/generated/recruitment.raml.html.     

The request and response bodies of virtually all of Aotal's APIs are in json schema format. There are comprehensive examples in json that match to the schemas.    

There are also several walkthrough documents, which contain blow by blow descriptions of the sequence of API calls between apps to complete some scenario such as posting a job to a job board.


Building the generated contents of this repository
----------------------------------------
This repository contains both the source files for Aotal's API definitions (RAML, json schema, json, html) and some generated output (mainly the html representation of the RAML).

After changing the source, update the generated output by using the tools from the tas-des-static repository at https://github.com/talentappstore/tas-des-static.

As well as generating html files, the build process also validates the RAML and tests every example against its corresponding json schema.
