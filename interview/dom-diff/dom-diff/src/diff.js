function diff(oldTree, newTree) {
  let patches = {}; //补丁
  //第一次比较应该是树的第0个索引
  let index = 0;
  // 递归树 比较后的结果放到补丁里
  walk(oldTree, newTree, index, patches);
  return patches;//返回补丁
}

function walk(oldNode, newNode, index, patches) {
  // 每个元素都有一个补丁
  let current = [];
  if (!newNode) {
    current.push({ type: 'REMOVE', index });
  } else if (isString(oldNode) && isString(newNode)) {
    if (oldNode !== newNode) {
      current.push({type: 'TEXT', text: newNode});
    }
  } else if (oldNode.type === newNode.type) {
    let attr = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attr).length > 0) {
      current.push({ type: 'ATTR', attr })
    }
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    current.push({ type: 'REPLACE', newNode });
  }

  if (current.length) {
    // 将元素和补丁对应起来，放到大补丁包中
    patches[index] = current;
  }
}

function isString(obj) {
  return typeof obj === 'string';
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];//有可能还是undefined
    }
  }

  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}

let num = 0;

function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches);
  });
}

export default diff;