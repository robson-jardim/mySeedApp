# MySeedApp


## Commands line used to create this project:

1 - Create The App with Routing and Service-Worker
    ng new mySeedApp --routing --service-worker

2 - Create an App Shell to Boosting Application Startup 
    ng generate universal app-shell --client-project mySeedApp
    ng generate app-shell my-loading-shell  
        --universal-project=app-shell
        --route=app-shell-path
        --client-project=mySeedApp

3 - Ading PWA capabilities
    ng add @angular/pwa --project mySeedApp


## Configuring App Shell
To config App Shell just edit the follow files
1. HTML Content: src/app/app-shell/app-shell.component.html
2. CSS Content: src/app/app-shell/app-shell.component.css


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
