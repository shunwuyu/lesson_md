import type { Object3D } from 'three';

export function findParent (object3d: Object3D, callback: (obj: Object3D) => boolean): Object3D | null {
    let parent: Object3D | null = object3d;
    while (!callback(parent)) {
      parent = parent.parent;
      if (parent === null) {
        return null;
      }
    }
    return parent;
}

export function checkNameIncludes (obj: Object3D, str: string): boolean {
    if (obj.name.includes(str)) {
      return true;
    } else {
      return false;
    }
}