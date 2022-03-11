import { createContext } from './context';
import { line, circle, text, rect, path } from './shape';

export function createRenderer(width, height) {
  const context = createContext(width, height);
  return {
    node: () => context.node,
  };
}