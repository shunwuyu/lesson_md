<template>
    <div id="three"></div>
    <Popover
    ref="popoverRef"
    :top="popoverTop"
    :left="popoverLeft"
    :data="popoverData"
    ></Popover>
</template>
<script lang="ts" setup>
import {ref, type Ref, onMounted } from 'vue';
import Viewer from '@/modules/Viewer';
import ModelLoader from '@/modules/ModelLoader';
import * as THREE from 'three';
import Event from '@/modules/Viewer/Events';
import { checkNameIncludes, findParent } from '@/utils';
import BoxHelperWrap from '@/modules/BoxHelperWrap';
import Popover from './Popover/index.vue';

let viewer: Viewer;
let modelLoader: ModelLoader;
let dataCenter: any = null;
let oldDataCenter: any = null;
let boxHelperWrap: BoxHelperWrap;
let modelSelect = ['zuo0', 'zuo1', 'zuo2', 'zuo3', 'zuo4', 'zuo5'];
let modelMoveName = '';
let modelSelectName = '';
let office: any = null;
let oldOffice: any = null;
let isModelSelectName = false;

const popoverRef: Ref = ref(null);
const popoverTop = ref(0);
const popoverLeft = ref(0);
const popoverData = ref<any>({});

onMounted(() => {
    init();
    initModel();
})

const init = () => {
    viewer = new Viewer('three');
    viewer.initRaycaster();
    modelLoader = new ModelLoader(viewer);
    boxHelperWrap = new BoxHelperWrap(viewer);
    viewer.emitter.on(Event.dblclick.raycaster, (list: THREE.Intersection[]) => {
    onMouseClick(list);
  });

  viewer.emitter.on(Event.mousemove.raycaster, (list: THREE.Intersection[]) => {
    onMouseMove(list);
  });
    
}

const initModel = () => {
    modelLoader.loadModelToScene('/models/plane.glb', baseModel => {
        const model = baseModel.gltf.scene;
        model.scale.set(0.0001 * 3, 0.0001 * 3, 0.0001 * 3)
        model.position.set(0, 0, 0);
        model.name = 'plane';
        baseModel.openCastShadow();

    });
    
    modelLoader.loadModelToScene('/models/datacenter.glb', baseModel => {
        // baseModel.setScalc(0.2);
        baseModel.setScale(0.2);
        const model = baseModel.gltf.scene;
        model.position.set(0, 0, 0);
        model.name = '机房';
        baseModel.openCastShadow();

        dataCenter = baseModel;
        oldDataCenter = model.clone();

        const rackList: any[] = [];
        model.traverse(item => {
            if (checkIsRack(item)) {
                rackList.push(item);
            }
        });
        viewer.setRaycasterObjects(rackList);
    })
}

function checkIsRack (obj: any): boolean {
  return checkNameIncludes(obj, 'rack');
}


const onMouseClick = (intersects: THREE.Intersection[]) => {
  console.log(intersects, '?????')
};
const onMouseMove = (intersects: THREE.Intersection[]) => {
    // console.log(intersects, '//////')
    if (!intersects.length) {
        popoverRef.value.setShow(false);
        boxHelperWrap.setVisible(false);
        return
    }

    const selectedObject = intersects[0].object || {};
    // console.log(selectedObject)
    let selectedObjectName = '';
    const findClickModel = (object: any) => {
        if (object.name.includes('rack')) {
            selectedObjectName = object.name;
            return;
        }
        if (object.parent) {
            findClickModel(object.parent);
        }
    };

    findClickModel(selectedObject);
    console.log(selectedObjectName, '--selectedObjectName---');
    console.log(selectedObject, '------selectedObject---------');
    const rack = findParent(selectedObject, checkIsRack);
    if (rack) {
        boxHelperWrap.attach(rack);
        updateRackInfo(rack.name);
    }

}

const updateRackInfo = (name: string) => {
    if (name) {
        popoverRef.value.setShow(true, { name });
        const event = viewer.mouseEvent as MouseEvent;
        popoverTop.value = event.y + 10;
        popoverLeft.value = event.x + 10;
    } else {
        popoverRef.value.setShow(false);
    }
}
</script>
<style scoped>
#three {
  height: 100%;
  width: 100%;
}
</style>