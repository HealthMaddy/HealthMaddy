// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDNbKrMo9P-FLoBW7LOEpuWvf0SBSGlfrI",
    authDomain: "health-maddy-web-app.firebaseapp.com",
    databaseURL: "https://health-maddy-web-app-default-rtdb.firebaseio.com",
    projectId: "health-maddy-web-app",
    storageBucket: "health-maddy-web-app.appspot.com",
    messagingSenderId: "351637798744",
    appId: "1:351637798744:web:6475fa8104fb4e697aaf2d",
    measurementId: "G-JW4PCG1444",
  },
  // functionsURL: 'https://us-central1-suppliety-1b098.cloudfunctions.net',
  // stripe: {
  //   publishable: 'pk_test_MLvZoWKGFtgbyLRo9mDxVZgT',
  //   clientId: 'ca_ETCjmcZxcuRKpZFhnEd6cg24aSI2LTr5',
  //   secret: 'sk_test_PQ0r9QVCHoCKxHzPsezvq1CX',
  //   currency: 'usd'
  // },
  loggingLevel: "Verbose",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
