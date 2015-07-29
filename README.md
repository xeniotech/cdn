# Care CDN

Care CDN bundles all the heavy weight javascript dependencies and uses https://rawgit.com/ to provide a production
CDN url. A CDN URL generally provides better caching and minimizes the load on the actual application.

### Getting Started - install nodeJS using the below instructions

Install NVM https://github.com/creationix/nvm#manual-install (follow manual install instructions).
This helps manage different versions of node and helps  install libraries and tools without requiring sudo access.
For windows environment, check https://github.com/coreybutler/nvm-windows.

##### Install the following node tools

```sh
$ npm install gulp -g
$ npm install bower -g
$ npm install webpack -g
```

### Download dependencies and start the app (First time only)
> npm start will download required dependencies, clean, lint, run tests and build the app and exports the output to /dist directory

```sh
$ npm start
```

### Build and Deployment

```sh
$ gulp build
```

*  The above command will build the care-vendor.js and its dependencies into /dist folder. Commit all the generated
files to git.
*  Login to your github account and create a new tag (Example, v1).
*  Goto https://rawgit.com/ and enter the path to care-vendor.js(Example: https://github.com/xeniotech/cdn/blob/v1/dist/care-vendor.js)
*  Take the production CDN URL provided and use it care-ui/src/index.htl