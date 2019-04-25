import * as THREE from 'threejs/three.js'
const Context = canvas.getContext('webgl');

export default class Main {
  constructor () {
    this.context = Context;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.devicePixelRatio = window.devicePixelRatio;
    this.viewCenter = new THREE.Vector3(0, 0, 0);

    this.initRender();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initObject();
    this.render();
  }
  initRender() {
  }
  initCamera() {
  }
  initScene() {
  }
  initLight() {}
  initObject() {}
  render() {}
}
