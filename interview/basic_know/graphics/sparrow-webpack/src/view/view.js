import { descendants } from '../utils/tree';
// import { computeFlexViews } from './flex';
// import { computeFacetViews } from './facet';
// import { computeLayerViews } from './layer';

export function createViews(root) {
  const nodes = descendants(root);
  // console.log(nodes, '????////');
  // console.log(nodes, '||||')
  const { width = 640, height = 480, x = 0, y = 0 } = root;
  // console.log(width, height, x, y)
  const rootView = { width, height, x, y };
  const nodeView = new Map([[root, rootView]]);
  // console.log(nodeView, '??????')
  for (const node of nodes) {
    const view = nodeView.get(node);
    console.log(view, '||||');
    // const { children = [], type } = node;
    // const computeChildrenViews = computes[type];
  }
}