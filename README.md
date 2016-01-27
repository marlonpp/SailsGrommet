# SailsGrommet

a [Sails](http://sailsjs.org) application integrated with the [UX Framework Grommet](http://grommet.io).

## Instructions
**To run in development mode use:** 
```sails lift --verbose```

This will lift your Sails application, bundle your assets (js, jsx, and scss) using Webpack and will lift a webpack-dev-server with hot reload capabilities. A new window will automatically open in your browser on http://localhost:9000/webpack-dev-server/, and all backend calls will be proxied to the Sails server on http://localhost:1337
Ps.: I used the --verbose option to be able to see what's happening during the bundle and hot reload process.

**To run in production mode use:** 
```sails lift --prod```

This will lift your Sails application in production mode, bundle and minify assets, and using Sails static file server to serve the assets.

## TODO
- Implement flux architecture using Redux.
- Integrate Frontend and Backend.
- Create test infrastructure.
