import { JSONLoader } from "three";

const jsonLoader = new JSONLoader();

export function loadModel( path ) {
  // console.log(path, "-------------");
  return new Promise( ( resolve ) => {
      jsonLoader.load(
          path,
          resolve,
          () => null
      );
  });
}
