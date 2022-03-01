import { createRenderer } from '../renderer/renderer';
import {bfs} from '../utils/tree'
import { createViews } from '../view/view';

export function plot(root) {
  const { width = 640, height = 480, renderer: plugin } = root;
  const renderer = createRenderer(width, height, plugin);
  flow(root);
  const views = createViews(root);
  return renderer.node();
}

function isChartNode(type) {
  switch (type) {
    case 'layer': case 'col': case 'row': return false;
    default:
      return true;
  }
}

function flow(root) {
  bfs(root, ({ type, children, ...options }) => {
    // console.log(type, children, options, '?????}}}}}')
    if (isChartNode(type)) return;
    // if (!children || children.length === 0) return;
    // const keyDescriptors = [
    //   'o:encodings', 'o:scales', 'o:guides', 'o:styles',
    //   'a:coordinates', 'a:statistics', 'a:transforms', 'a:data',
    // ];
    // for (const child of children) {
    //   for (const descriptor of keyDescriptors) {
    //     const [type, key] = descriptor.split(':');
    //     if (type === 'o') {
    //       child[key] = { ...options[key], ...child[key] };
    //     } else {
    //       child[key] = child[key] || options[key];
    //     }
    //   }
    // }
  })
}