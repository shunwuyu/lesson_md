function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var countNodes = function(root) {
  if (root === null) {
    return 0;
  }

  var tmp = root,
    totalDep = 0,
    nodeNumsInLastLevel = 0,
    node = root,
    curDep,
    depSplit;

  while (tmp) {
    tmp = tmp.left;
    totalDep++; //总深度
  }

  curDep = 1;
  while(curDep < totalDep) {
    depSplit = findSplit(node);

    if (depSplit + curDep === totalDep) {
      nodeNumsInLastLevel += Math.pow(2, depSplit - 1);
      node = node.right;
    } else {
      node = node.left;
    }
    curDep++;
  }
  return Math.pow(2, totalDep - 1) + nodeNumsInLastLevel;
}

function findSplit(root) {
  if (!root || !root.right) {
      return 0;
  }
  
  var dep = 0,
      tmp = root;
  
  tmp = tmp.right;
  while(tmp) {
      dep++;
      tmp = tmp.left;
  }
  
  return dep;
}