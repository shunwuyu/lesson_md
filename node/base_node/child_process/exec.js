const util = require('util');
const execPromise = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr, child } = await execPromise('ls');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
  // console.log(child);
}
lsExample();

// old
const { exec } = require('child_process');
const p = exec('cat *.js | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
