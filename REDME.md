# Cypress no-framework component tests
Cypress can be used to run unit tests and at this point there is enough documentation how to get up an running using webpack, vite, react, etc.  
But how do you do it without any framework? Just plain es2020 mjs files?

## Key learnings
* You can provide your own [dev server](https://docs.cypress.io/guides/component-testing/component-framework-configuration#Custom-Dev-Server) (e.g. express)
* Your dev server has to serve an `index.js` file that does some magic and acutally loads the spec files
