# Friend-Finder

## Introduction to Friend Finder
Friend Finder app is basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Dependencies
* Node JS
* My SQL
* npm packages (included in package.json file): express (npm install express), path (npm install path), body-parser (npm install body-parser)

##Getting Started - To install the application follow the instructions below:

```
git clone git@github.com:angrbrd/friend-finder.git
cd friend-finder
npm install
```

## Running Locally
To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.

```
export PORT=8080
```

After the PORT environment variable has been set, run the Node.js application with the command below.

```
node server.js
```

The application will now be running locally on PORT, in this case that is port 8080. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:8080.

```
