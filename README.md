# Login With JWT(MEAN)

The mean stack is intended to provide a simple and fun starting point for cloud native fullstack javascript applications.
MEAN is a set of Open Source components that together, provide an end-to-end framework for building dynamic web applications; starting from the top (code running in the browser) to the bottom (database). The stack is made up of:

* **M**ongoDB : Document database – used by your back-end application to store its data as JSON (JavaScript Object Notation) documents. Go through [MongoDB Official Website](https://www.mongodb.com/) and proceed to their [Official Manual](https://docs.mongodb.com/manual/), which should help you understand NoSQL and MongoDB better
* **E**xpress (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js. The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/en/starter/installing.html) guide, as well as an [ExpressJS](http://expressjs.com/en/guide/routing.html) guide for general express topics. You can also go through this [StackOverflow Thread](https://stackoverflow.com/questions/12616153/what-is-express-js) for more resources.
* **A**ngular : Front-end web app framework; runs your JavaScript code in the user's browser, allowing your application UI to be dynamic. Angular's [Official Website](https://angular.io/docs) is a great starting point. You can also use [Thinkster Popular Guide](https://thinkster.io/).
* **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript. Start by going through [Node.js Official Website](https://nodejs.org/en/) and this [StackOverflow Thread](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.
## JSON web tokens (JWT)

A JSON web token, or JWT (“jot”) for short, is a standardized, optionally validated and/or encrypted container format that is used to securely transfer information between two parties. Go through [JWT](https://jwt.io/introduction/) for more detail.
## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.
* MongoDB - [Download & Install MongoDB](https://www.mongodb.com/download-center), and make sure it's running on the default port (27017).
* Angular CLI - [Install Angular CLI](https://cli.angular.io/). The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` or `ng g c component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. Open Terminal and navigate to backend. Run `npm start` to start your server.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
