import * as THREE from 'threejs/three.js'
require('threejs/OrbitControls.js')
import BasicRubik from 'object/Rubik.js'
const Context = canvas.getContext('webgl');

export default class Main {
  constructor() {
    this.context = Context;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    // console.log(this.width)
    this.devicePixelRatio = window.devicePixelRatio;
    this.viewCenter = new THREE.Vector3(0, 0, 0);

    this.initRender();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initObject();
    this.render();
  }

  initRender () {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      context: this.context
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xFFFFFF, 1.0);
    canvas.width = this.width * this.devicePixelRatio;
    canvas.height = this.height * this.devicePixelRatio;
    this.renderer.setPixelRatio(this.devicePixelRatio);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1500);
    
    this.camera.position.set(0, 0, 300 / this.camera.aspect);
    // console.log(this.camera.aspect)
    this.camera.up.set(0, 1, 0);//正方向
    this.camera.lookAt(this.viewCenter);
    this.orbitController = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.orbitController.enableZoom = false;
    this.orbitController.rotateSpeed = 2;
    this.orbitController.target = this.viewCenter;
  }

  initScene() {
    this.scene = new THREE.Scene();
  }
  initLight() {
    this.light = new THREE.AmbientLight(0xfefefe);
    this.scene.add(this.light);
  }
  initObject() {
    var rubik = new BasicRubik(this);
    rubik.model();
  }
  render() {
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this), canvas);
  }
}
