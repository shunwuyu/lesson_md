import { sync } from './components/sync/index';

document.getElementById('asyncBtn').addEventListener('click', function() {
  import(/* webpackChunkName: 'async-thunk' */ './components/async/index.js')
  .then(_ => {
    _.default.init();
  })
})
sync();