
import program from 'commander';
import {VERSION} from './utils/constants';
 
import install from './install'
program.command('install')                            //加命令 
        .description('install template')
        .alias('i')
        .action(() => {
            install()
        })
 
program.version(VERSION,'-v --version').parse(process.argv);