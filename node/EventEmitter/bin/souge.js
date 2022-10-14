#!/usr/bin/env node

const pkg = require('../package')
const emitter = require('../index.js');

function printVersion() {
  console.log('souge ' + pkg.version)
  process.exit()
}

function printHelp(code) {
  const lines = [
    '',
    '  Usage:',
    '    souge [songName]',
    '',
    '  Options:',
    '    -v, --version    print the version of vc',
    '    -h, --help       display this message',
    '',
    '  Examples:',
    '    $ souge Hello',
    ''
  ]

  console.log(lines.join('\n'))
  process.exit(code || 0)
}

const main = async (argv) => {
  if (!argv || !argv.length) {
    printHelp(1)
  }

  let arg = argv[0]

  switch(arg) {
    case '-v':
    case '-V':
    case '--version':
      printVersion()

      break
    case '-h':
    case '-H':
    case '--help':
      printHelp()

      break
    default:
      // # 启动搜索逻辑，同时传入参数
      emitter.emit('search', arg)
      break
  }
}

main(process.argv.slice(2))
module.exports = main;