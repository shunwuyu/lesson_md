import {
    // AmbientLight是three.js中的一种灯光类型，用于在场景中创建环境光，使整个场景有一个基础的、均匀的亮度。它没有特定的方向和位置，并适用于所有物体。
    AmbientLight,
    // 坐标轴模型
    AxesHelper,
    // 方向光
    DirectionalLight,
    GridHelper,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from "three";


import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { IFCLoader } from "web-ifc-three/IFCLoader";

const scene = new Scene();

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 15;
camera.position.y = 13;
camera.position.x = 8;

const lightColor = 0xffffff;
// 白色的头顶 均匀照明灯，或户外的天空和周围环境散射的自然光
// 环境光
const ambientLight = new AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

// intensify 强度  0-1很强
const directionalLight = new DirectionalLight(lightColor, 1);
directionalLight.position.set(0, 10, 0);
directionalLight.target.position.set(-5, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new WebGLRenderer({ canvas: threeCanvas, alpha: true });
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Creates grids and axes in the scene
const grid = new GridHelper(50, 50);
scene.add(grid);

const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const controls = new OrbitControls(camera, threeCanvas);
// 阻尼效果
controls.enableDamping = true;
controls.target.set(-2, 0, 0);

const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};
  
animate();

window.addEventListener("resize", () => {
    (size.width = window.innerWidth), (size.height = window.innerHeight);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
});

const ifcLoader = new IFCLoader();
ifcLoader.ifcManager.setWasmPath("./");

const input = document.getElementById("file-input");
input.addEventListener(
"change",
(changed) => {
    const ifcURL = URL.createObjectURL(changed.target.files[0]);
    ifcLoader.load(ifcURL, (ifcModel) => scene.add(ifcModel));
},
false
);


