import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/exclude",
        "exact": true,
        "component": require('../exclude.js').default
      },
      {
        "path": "/animation-transitions",
        "exact": false,
        "component": require('../animation-transitions/_layout.js').default,
        "routes": [
          {
            "path": "/animation-transitions/blue",
            "exact": true,
            "component": require('../animation-transitions/blue.js').default
          },
          {
            "path": "/animation-transitions/green",
            "exact": true,
            "component": require('../animation-transitions/green.js').default
          },
          {
            "path": "/animation-transitions/red",
            "exact": true,
            "component": require('../animation-transitions/red.js').default
          },
          {
            "component": () => React.createElement(require('/Users/shunwuyu/.nvm/versions/node/v8.14.0/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
          }
        ]
      },
      {
        "path": "/list",
        "exact": true,
        "component": require('../list/index.js').default
      },
      {
        "path": "/prompt",
        "exact": true,
        "component": require('../prompt.js').default
      },
      {
        "path": "/scroll-to-top",
        "exact": false,
        "component": require('../scroll-to-top/_layout.js').default,
        "routes": [
          {
            "path": "/scroll-to-top/a",
            "exact": true,
            "component": require('../scroll-to-top/a.js').default
          },
          {
            "path": "/scroll-to-top/b",
            "exact": true,
            "component": require('../scroll-to-top/b.js').default
          },
          {
            "component": () => React.createElement(require('/Users/shunwuyu/.nvm/versions/node/v8.14.0/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
          }
        ]
      },
      {
        "path": "/users/posts/:post",
        "exact": false,
        "component": require('../users/posts/$post/_layout.js').default,
        "routes": [
          {
            "path": "/users/posts/:post/comments",
            "exact": true,
            "component": require('../users/posts/$post/comments.js').default
          },
          {
            "component": () => React.createElement(require('/Users/shunwuyu/.nvm/versions/node/v8.14.0/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
          }
        ]
      },
      {
        "path": "/users/:id?",
        "exact": true,
        "component": require('../users/$id$.js').default
      },
      {
        "component": () => React.createElement(require('/Users/shunwuyu/.nvm/versions/node/v8.14.0/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/shunwuyu/.nvm/versions/node/v8.14.0/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
