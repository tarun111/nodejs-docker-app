# nodejs-docker-app

This app will run a redis and node:14 app. App will interact with redis and with each visit it'll increment a counter.

Use following command to run

`docker-compose up -d`

Go to browser and type: http://127.0.0.1:8080
Reload it to see the increased counter

To stop the app, run:

`docker-compose down`
