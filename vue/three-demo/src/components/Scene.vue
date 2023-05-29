<template>
    <div id="three"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, type Ref } from 'vue';
import Viewer, { type Animate }  from '../modules/Viewer';
import ModelLoader from '../modules/ModelLoader';
import * as THREE from 'three';

let viewer: Viewer;
let modelLoader: ModelLoader;

onMounted(() => {
    init();
    initModel();
    viewer.scene.traverse((item: THREE.Object3D) => {
        console.log(item, '0000000000');
    });
})

const initModel = () => {
    modelLoader.loadModelToScene('/models/plane.glb', baseModel => {
        const model = baseModel.gltf.scene;
        model.scale.set(0.0001 * 3, 0.0001 * 3, 0.0001 * 3)
        model.position.set(0, 0, 0);
        model.name = 'plane';
        baseModel.openCastShadow();

        const texture = (baseModel.object.children[0] as any).material.map;
        console.log(texture, 'texture-------');
        const fnOnj = planeAnimate(texture);
        viewer.addAnimate(fnOnj);
    })
}

    const planeAnimate = (texture: any): Animate => {
        console.log(texture, 'texture');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        const animateFn = {
        fun: () => {
            const count = texture.repeat.y;
            if (count <= 10) {
            texture.repeat.x += 0.01;
            texture.repeat.y += 0.02;
            } else {
            texture.repeat.x = 0;
            texture.repeat.y = 0;
            }
        },
        content: viewer,
        };
        return animateFn;
    }

const init = () => {
    viewer = new Viewer('three');
    viewer.initRaycaster();
    modelLoader = new ModelLoader(viewer);
}
</script>
<style scoped>
#three {
  height: 100%;
  width: 100%;
}
</style>