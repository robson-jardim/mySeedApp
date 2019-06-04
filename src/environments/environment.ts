// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyChBm5-CirVpZZy1x71kloEfM_5iedpR1Q',
    authDomain: 'ninacheesecakeapp.firebaseapp.com',
    databaseURL: 'https://ninacheesecakeapp.firebaseio.com',
    projectId: 'ninacheesecakeapp',
    storageBucket: 'ninacheesecakeapp.appspot.com',
    messagingSenderId: '892323237777',
    appId: '1:892323237777:web:4229cbc10cb4713a'
  },

  appConfig: {
    AnonymousLogin: 'true',
    setDefaultLang: 'pt-BR'
  }

};

// 2. Add your credentials from step 1

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
