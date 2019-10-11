const tree = {
  tag:'tbody',
  children: {
    tag: 'tr',
    parent: tree,
    children: {
      tag: 'td',
      parent: tree.children
    }
  }
}