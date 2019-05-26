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

3 - Adding PWA capabilities
    ng add @angular/pwa --project mySeedApp

4 - Adding Translation App Capabilities
        npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save
        extract translate files: npm run i18n


## Configuring App Shell
To config App Shell just edit the follow files
1. HTML Content: src/app/app-shell/app-shell.component.html
2. CSS Content: src/app/app-shell/app-shell.component.css


## Configuring Github
In terminal go to project folder and then execute the follow commands

Local 
1. To Init the GitHub: git init
2. To add the files in your new local repository: git add .
3. To commit the files that you've staged in your local repository: git commit -m "First commit"

Remote
1. Go to with and create a public repository with no README.md file
2. git remote add origin remote repository URL
        git remote add origin https://github.com/robson-jardim/mySeedApp.git
3. Pushes the changes in your local repository up to the remote repository you specified as the origin
        git push -u origin master


## Project Commands
1. Build Dev App: ng build
2. Serve Dev App localy: ng serve
3. Build Prod App in "dist"folder: ng build --prod 
4. Serve Prod App localy: ng serve --prod
5. Generate Shell App: ng run mySeedApp:app-shell


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
