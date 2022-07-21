# Cinema.Uz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Install bootstrap

    npm install bootstrap

    "styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.css"
    ],
    "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.js"
    ]

# Install Jquery

     npm install jquery --save
     "scripts": [
        "node_modules/jquery/dist/jquery.js",
       ]

# Bootstrap DropDown
     npm install bootstrap jquery popper.js --save     

    In Bootstrap 4, bootstrap.min.js and bootstrap.bundle.min.js now conflict in dropdown.
    By removing bootstrap.min.js, the dropdown double click issue will resolved

      "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/scss/bootstrap.scss"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js"
            ],

## crypto-js
    user only vertions
    "@types/crypto-js": "^3.1.43",
    "crypto-js": "^3.1.8",

    npm install crypto-js --save
    npm install @types/crypto-js --save  
    "scripts": [
       "node_modules/crypto-js/crypto-js.js"
     ]


# Install font awesome
       ### https://fontawesome.com/
       npm install --save-dev @fortawesome/fontawesome-free
       "styles": ["node_modules/@fortawesome/fontawesome-free/css/all.css"],
       "scripts": ["node_modules/@fortawesome/fontawesome-free/js/all.js"]
