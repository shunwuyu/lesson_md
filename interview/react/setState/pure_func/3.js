const { Map, fromJS } = require('immutable');
let a = Map({
  select: 'users',
  filter: Map({ name: 'Cam' })
})

let b = a.set('select', 'people')
console.log(a == b);

console.log(a.get('filter') === b.get('filter'));
const obj = {
  count: 0
}
const immutableState = fromJS (obj);
console.log(immutableState.get('count'))
const jsObj =  immutableState.toJS ();
jsObj.count = 2;
console.log(obj);