class SyntheticEvent {
    constructor(e) {
      this.nativeEvent = e;
    }
    stopPropagation() {
        this._stopPropagation = true;
        if (this.nativeEvent.stopPropagation) {
            this.nativeEvent.stopPropagation();
        }
    }    
}
const dispatchEvent = (e, type) => {
    const se = new SyntheticEvent(e); // 合成事件
    const ele = e.target;
    let fiber;
    for (let prop in ele) {
        // console.log(prop);
        if (prop.toLowerCase().includes("fiber")) {
            fiber = ele[prop];
            // console.log(fiber, '-----------------');
        }
    }
    const paths = collectPaths(type, fiber);
    // console.log(paths);
    triggerEventFlow(paths, type + "CAPTURE", se);
    // if (!se._stopPropagation) {
    //     triggerEventFlow(paths.reverse(), type, se);
    // }
}

const triggerEventFlow = (paths, type, se) => {
    for (let i = paths.length; i--; ) {
        const pathNode = paths[i];
        console.log(pathNode, type);
        // console.log(type, '---------------------');
        const callback = pathNode[type];
        if (callback) {
            callback.call(null, se);
        }
        if (se._stopPropagation) {
            break;
        }
        // console.log(callback);
    }
}

const collectPaths = (type, begin) => {
    const paths = [];
    // console.log(begin.return, begin.return.memoizedProps); // 父节点
    while (begin.tag !== 3) { // root 节点
        const { memoizedProps, tag } = begin;  
        if (tag === 5) {
            const eventName = ("on" + type).toUpperCase();
            if (memoizedProps && Object.keys(memoizedProps).includes(eventName)) {
                const pathNode = {};
                pathNode[type.toUpperCase()] = memoizedProps[eventName];
                paths.push(pathNode);
            }
        }
        begin = begin.return;
        // console.log(begin, '------')
    }
    return paths;
}

export const addEvent = (container, type) => {
    container.addEventListener(type, (e) => {
        // console.log(type.toUpperCase())
        // e 事件对象，  大写CLIK   容器
        dispatchEvent(e, type.toUpperCase(), container);
    });
};
