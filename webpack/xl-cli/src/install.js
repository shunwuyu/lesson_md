import ora from 'ora';   //ora 一个命令行loading效果
import inquirer from 'inquirer'  //命令行交互
import downLoadGit from 'download-git-repo';  //github api用来下载github的模板
 
let install = async () => {
    // 下载模板 
    let loading = ora('fetching template......');
    let answer = await inquirer.prompt([
        {
            type: 'input',        //你可以输入你自己的名称
            name: 'projectName',
            message:'项目名称',
            default:'xlDemo'    //默认名
        }
    ]);
    // 项目名字
    let project = answer.projectName;
    loading.start();
    //我在github上面上传了一个非常简单的模板 xlei1123/xl-cli downLoadGit(src, dest)  从哪拉 拉到那  process.cwd()+'/'+project这是拉到了当前目录下的你刚刚命名的文件中
    downLoadGit('xlei1123/xl-cli',process.cwd()+'/'+project,(err) => {  
        if(err) {
            console.log(err)
            return;
        }
        console.log(process.cwd()+'/'+project)
        loading.succeed();
    });
}
export default install;