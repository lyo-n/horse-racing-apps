We want you to implement a small web app which can display horse betting status.

Information about distance run by horse is available from a locally running server.
Any additional visual enhancements will be a plus. 
Be sure that your application is tested well.

## Requirements:
- web app have to take data from local server
- web app have to show horse run distance in real time 

Ideas on how horse running progress can look like is up to you.

You should use following stack:
- React (preferable with hooks)
- Redux (with Redux-Thunk or any other Redux middleware you are familiar) or any other state-manager library you want
- Socket.io - to connect to the server
- any UI library you want, or you can use just pure CSS
- Testing Library

### How to run the server
```cd server && npm install && npm run start```
You can visit [http://localhost:3002](http://localhost:3002) to check that the service is working correctly and inspect the data it produces.

### How to run you web application
```cd client && npm install && npm run start```
You can visit [http://localhost:3000](http://localhost:3000) to check that web app is working correctly.


![Horses](https://raw.githubusercontent.com/zakhar-bozhok-jito/jun-frontend-test-task/main/horses.gif)
