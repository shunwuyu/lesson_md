import { 
    AxesHelper,
    WebGLRenderer,
    SRGBColorSpace,
    Scene,
    Camera,
    PerspectiveCamera,
    AmbientLight,
    DirectionalLight,
    Raycaster,
    Vector2
} from 'three';
import Events from './Events';
import SkyBoxs from '../SkyBoxs';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import mitt, { type Emitter } from 'mitt';
import { throttle } from 'lodash-es';

export type Animate = {
    fun: (arg: any) => any,
    content: any,
}

export default class Viewer {
    public id: string;
    public viewerDom!: HTMLElement;
    public renderer!: WebGLRenderer;
    public scene!: Scene;
    public camera!: PerspectiveCamera;
    public controls!: OrbitControls;
    public skyboxs!: SkyBoxs;
    public emitter!: Emitter<any>;
    public raycaster!: Raycaster;
    public mouse!: Vector2;
    public mouseEvent: MouseEvent | undefined;
    public raycasterObjects: THREE.Object3D[] = [];

    constructor(id: string) {
        this.id = id;
        this.initViewer();
    }

    public addAxis() {
        const axis = new AxesHelper(1000);
        this.scene?.add(axis);
    }

    private initViewer() {
        this.emitter = mitt();

        this.initRenderer();
        this.initScene();
        this.initCamera();
        this.initControl();
        this.initLight();
        this.initSkybox();
        this.addAxis();

        this.raycaster = new Raycaster();
        this.mouse = new Vector2();

        const animate = () => {
            
            requestAnimationFrame(animate);
      
            this.updateDom();
            this.readerDom();
          };
      
          animate();
        
    }

    private initSkybox() {
        if (!this.skyboxs) this.skyboxs = new SkyBoxs(this);
        this.skyboxs.addSkybox('night');
        this.skyboxs.addFog();
    }

    private initLight() {
        const ambient = new AmbientLight(0xffffff, 0.6);
        this.scene.add(ambient);
        // 在 Three.js 中，坐标系默认为右手坐标系，其中 X 
        // 轴水平向右，Y 轴垂直向上，Z 轴垂直于屏幕向外
        // 。因此，当 Y 值为正数时，光源将位于场景的上方，
        // 照射下方的物体；当 Y 值为负数时，光源将位于场
        // 景的下方，照射上方的物体。在这个例子中，光源的
        //  Y 坐标被设置为 200，因此该光源应该是位于场景
        //  上方的，可能是用来模拟阳光或灯光等。
        // 通常是三维空间中的世界坐标系长度单位，
        // 比如米（meters）或厘米（centimeters）
        const light = new DirectionalLight(0xffffff);
        light.position.set(0, 200, 100);
        // 投射阴影
        // 阴影效果是通过在光源
        // 处创建一个视锥体来实现的，视锥体外的物体将不会产生阴影
        light.castShadow = true;
        light.shadow.camera.top = 180;
        light.shadow.camera.bottom = -100;
        light.shadow.camera.left = -120;
        light.shadow.camera.right = 400;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 400;
        light.shadow.mapSize.set(1024, 1024);
        this.scene.add(light);
    }   

    private initControl() {
        this.controls = new OrbitControls(
            this.camera as Camera,
            this.renderer?.domElement
        );
        // 阻尼效果
        this.controls.enableDamping = false;
        // 定义平移时如何平移相机的位置 控制不上下移动
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 2;
        this.controls.maxDistance = 1000;
        this.controls.addEventListener('change', ()=>{
            this.renderer.render(this.scene, this.camera);
        });
    }

    private updateDom() {
        this.controls.update();
        // 更新参数
        this.camera.aspect = this.viewerDom.clientWidth / this.viewerDom.clientHeight; // 摄像机视锥体的长宽比，通常是使用画布的宽/画布的高
        this.camera.updateProjectionMatrix(); // 更新摄像机投影矩阵。在任何参数被改变以后必须被调用,来使得这些改变生效
        this.renderer.setSize(this.viewerDom.clientWidth, this.viewerDom.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio); // 设置设备像素比
    }

     // 渲染dom
    private readerDom() {
        this.renderer?.render(this.scene as Scene, this.camera as Camera);
    }

    private initRenderer() {
        // 获取画布dom
        this.viewerDom = document.getElementById(this.id) as HTMLElement;
        // 初始化渲染器
        this.renderer = new WebGLRenderer({
            logarithmicDepthBuffer: true,
            antialias: true, // true/false表示是否开启反锯齿
            alpha: true, // true/false 表示是否可以设置背景色透明
            precision: 'mediump', // highp/mediump/lowp 表示着色精度选择
            premultipliedAlpha: true, // true/false 表示是否可以设置像素深度（用来度量图像的分辨率）
            // preserveDrawingBuffer: false, // true/false 表示是否保存绘图缓冲
            // physicallyCorrectLights: true, // true/false 表示是否开启物理光照
          });
        this.renderer.clearDepth();
          
        this.renderer.shadowMap.enabled = true;
        this.renderer.outputColorSpace = SRGBColorSpace; // 可以看到更亮的材质，同时这也影响到环境贴图。
        this.viewerDom.appendChild(this.renderer.domElement);
    }

    private initScene() {
        this.scene = new Scene();
    }
    private initCamera() {
        // 渲染相机
        this.camera = new PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 2000);
        //设置相机位置
        this.camera.position.set(4, 2, -3);
        //设置相机方向
        this.camera.lookAt(0, 0, 0);
    }
    public initRaycaster() {
        this.raycaster = new Raycaster();
        // console.log(this.raycaster, '??');
        const initRaycasterEvent: Function = (eventName: keyof HTMLElementEventMap): void => {
            const funWrap = throttle(
              (event: any) => {
                this.mouseEvent = event;
                this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
                // @ts-expect-error
                this.emitter.emit(Events[eventName].raycaster, this.getRaycasterIntersectObjects());
              },
              50
            );
            this.viewerDom.addEventListener(eventName, funWrap, false);
        }
        initRaycasterEvent('click');
        initRaycasterEvent('dblclick');
        initRaycasterEvent('mousemove');
    }
    
    public setRaycasterObjects (objList: THREE.Object3D[]): void {
        this.raycasterObjects = objList;
    }

    private getRaycasterIntersectObjects(): THREE.Intersection[] {
        if (!this.raycasterObjects.length) return [];
        this.raycaster.setFromCamera(this.mouse, this.camera);
        return this.raycaster.intersectObjects(this.raycasterObjects, true);
    }
}

