import help from '../common/help';

console.log('async', help.version);

const test = {
  init() {
    console.log('test async intit');
  }
}
export default test;