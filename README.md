## Contents

* /public - static directories suchs as /images
* /routes - route files for tutorial project
* /views - views for tutorial project
* README.md - this file
* app.js - central app file for tutorial project
* package.json - package info for tutorial project


To the project directory, open up a terminal window and run docker-compose build then docker-compose up which will spin up two containers and aggregate the logs of both containers.
Now if we point our browser to the application URL localhost:3000/newname,add a new user and hit the Submit button or delete a user and hit the Remove button,then we should now be able to see the newly change in localhost:3000/namelist.

And the Api-Doc address is localhost:3000/apidoc/#api-User.
