import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type Viewer from '../Viewer';
import type { Object3DExtends } from "@/types";
export default class BaseModel {
    protected viewer: Viewer;
    public gltf: GLTF;
    public object: THREE.Group;
    
    constructor(gltf: GLTF, viewer: Viewer) {
        this.gltf = gltf;
        this.viewer = viewer;
        this.object = gltf.scene || gltf;
    }
    public setScale(x: number, y?: number, z?: number) {
        this.object.scale.set(x, y || x, z || x);
    }
    // glTF 是一种基于 JSON 格式的文件格式，
    // 用于在 3D 应用程序之间传输和表示可视化数据
    public openCastShadow() {
        // gltf.scene.traverse 是 GLTFLoader 加载 glTF 模型后
        // 获取其中场景对象的方法之一
        this.gltf.scene.traverse((model: Object3DExtends) => {
            // 在 Three.js 中，视锥体剪裁是一种优化技术，
            // 用于在场景中只渲染那些位于视锥体内的物体，
            // 以减少无用的计算和绘制开销。当一个物体被设置为
            //  frustumCulled 时，Three.js 在渲染过程中会自
            //  动判断它是否在相机的视锥体内。如果不在，就会
            //  跳过对该物体的渲染，从而提高整体的渲染性能。
            model.frustumCulled = false;
            // castShadow 是 Three.js 中 Object3D 
            // 类型对象的一个属性，用于设置当前对象是否对
            // 其它物体产生阴影贡献
            model.castShadow = true;
        })
    }
}