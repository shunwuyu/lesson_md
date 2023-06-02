// 假设这是给定的目录路径列表
const pathList = [
    '/root/dir1/file1.txt',
    '/root/dir1/subdir1/file2.txt',
    '/root/dir2/file3.txt',
    '/root/dir2/subdir2/file4.txt',
    '/root/dir2/subdir3/file5.txt'
  ];
  
  // 将目录路径列表转换为树形结构
  const tree = {};
  
  for (let path of pathList) {
    // 将路径按照 / 分隔，并去除第一个空元素（即第一个 /）
    const parts = path.split('/').filter(part => part !== '');
    
    let currentNode = tree;
    
    // 遍历当前路径的每个部分，如果在当前节点中不存在该部分，则创建新的节点
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      
      if (!currentNode[part]) {
        currentNode[part] = {};
      }
      
      currentNode = currentNode[part];
    }
    
    // 在最后一个部分所表示的节点下添加文件名
    const fileName = parts[parts.length - 1];
    if (!currentNode.files) {
      currentNode.files = [];
    }
    currentNode.files.push(fileName);
  }
  
  console.log(tree);