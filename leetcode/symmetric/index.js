var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }

  return isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left, right) {
  if ((left === null && right !== null) || (left !== null && right === null)) {
    return false;
  }

  if (left === null && right === null) {
    return true;
  } else if (left.val !== right.val) {
    return false;
  }

  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}