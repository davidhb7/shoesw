// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  supabase:{
    publicKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcHJtZWRyZXJpYWdzbHhiYnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyOTc1NDYsImV4cCI6MTk2Mjg3MzU0Nn0.apbY2MTVfDSLQixLswpCXLaLjCZM4gHEKzfXVp28Ui4',
    url:'https://qcprmedreriagslxbbsx.supabase.co'
  },

  url:'http://localhost:8000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
