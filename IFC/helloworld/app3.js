import {
    AmbientLight,
    AxesHelper,
    DirectionalLight,
    GridHelper,
    PerspectiveCamera,
    Scene,
    // 利用Raycaster类，我们可以检测指定位置和方向的射线是否与
    // 场景中的物体相交，并获取交点、交叉物体等信息
    Raycaster,
    // Vector2类的实例常用于表示二维图像中的点、坐标或纹理uv坐标等信息
    Vector2,
    WebGLRenderer,
} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {IFCLoader} from "web-ifc-three/IFCLoader";
// three.js的一个插件，用于构建三角网格模型的层次包围盒（Bounding Volume
//  Hierarchy，BVH）以实现快速的光线与物体的碰撞检测。
import {
    // 用于实现高效的射线碰撞检测
    acceleratedRaycast,

    computeBoundsTree,
    disposeBoundsTree
} from 'three-mesh-bvh';

//Creates the Three.js scene
const scene = new Scene();

//Object to store the size of the viewport
const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

//Creates the camera (point of view of the user)
const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 15;
camera.position.y = 13;
camera.position.x = -8;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(lightColor, 1);
directionalLight.position.set(0, 10, 0);
directionalLight.target.position.set(-5, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new WebGLRenderer({canvas: threeCanvas, alpha: true});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Creates grids and axes in the scene
const grid = new GridHelper(50, 30);
scene.add(grid);

const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

//Creates the orbit controls (to navigate the scene)
const controls = new OrbitControls(camera, threeCanvas);
controls.enableDamping = true;
controls.target.set(-2, 0, 0);

//Animation loop
const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
    (size.width = window.innerWidth), (size.height = window.innerHeight);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
});

//Sets up the IFC loading
const ifcModels = [];
const ifcLoader = new IFCLoader();
ifcLoader.ifcManager.setWasmPath("./");
ifcLoader.load("./01.ifc", (ifcModel) => {
    ifcModels.push(ifcModel);
    scene.add(ifcModel)
});


// Sets up optimized picking
ifcLoader.ifcManager.setupThreeMeshBVH(
    computeBoundsTree,
    disposeBoundsTree,
    acceleratedRaycast);

const raycaster = new Raycaster();
raycaster.firstHitOnly = true;
const mouse = new Vector2();

function cast(event) {
    // 通过对鼠标点击事件的位置进行归一化处理，我们
    // 可以将其转换为一个与窗口大小无关的坐标系，并
    // 使用该坐标系进行射线碰撞检测，以便更好地控制3D场景中的物体。
    // Computes the position of the mouse on the screen
    const bounds = threeCanvas.getBoundingClientRect();
    // console.log(bounds, event.clientX, event.clientY)
    const x1 = event.clientX - bounds.left;
    const x2 = bounds.right - bounds.left;
    // console.log(x1, x2);
    mouse.x = (x1 / x2) * 2 - 1;
    console.log(mouse.x)

    const y1 = event.clientY - bounds.top;
    const y2 = bounds.bottom - bounds.top;
    mouse.y = -(y1 / y2) * 2 + 1;

    // Places it on the camera pointing to the mouse
    raycaster.setFromCamera(mouse, camera);

    // Casts a ray
    return raycaster.intersectObjects(ifcModels);
}

const output = document.getElementById("id-output");

async function pick(event) {
    const found = cast(event)[0];
    if (found) {
        const index = found.faceIndex;
        const geometry = found.object.geometry;
        const ifc = ifcLoader.ifcManager;
        const id = ifc.getExpressId(geometry, index);
        const modelID = found.object.modelID;
        const props = await ifc.getItemProperties(modelID, id);
        output.innerHTML = JSON.stringify(props, null, 2);
    }
}

window.ondblclick = pick;