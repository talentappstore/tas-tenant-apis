Tenant API definitions by Aotal, for Talent App Store
=====================================================

About Talent App Store
----------------------
Talent App Store is an open marketplace for HR microservices (apps).

The APIs provided by most HR systems today follow a hub and spoke model, where apps are small, clip-on appendages to the big master system. As such, the APIs are usually defined by the vendor of that master system, and apps can only use the APis to communicate to that master system, not to each other. Communication is typically inwards, where the clip-on app calls APIs on the master system, rather than the other way around.

By contrast, Talent App Store follows a peer to peer model. All apps are equal. Any app can call APIs on any other app (TAS calls these tenant APIs). Any developer can define tenant APIs, and any app can produce or consume any developer's tenant APIs.

Although Aotal is the company behind Talent App Store, Aotal's API definitions are just like any other developer's.   

Aotal's tenant APIs
-------------------
This repository contains Aotal's tenant API definitions and supporting documentation.

An index of all of the API documentation is http://talentappstore.github.io/tas-tenant-apis/.

The API definitions themselves are in RAML (currently 0.8), which are then processed into html form for easier browsing.

The main RAML document, which at this time focuses on recruitment, is http://talentappstore.github.io/tas-tenant-apis/generated/recruitment.raml.html.     

The request and response bodies of virtually all of Aotal's APIs are in json schema format. There are comprehensive examples that match to the schemas.    

There are also several walkthrough documents, which contain blow by blow descriptions of the sequence of API calls between apps to complete some scenario such as posting a job to a job board.