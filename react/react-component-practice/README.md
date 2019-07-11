
## 进度条
```js
Progress.propTypes = {
    //进度
    progress: 必须 number,
    //是否禁用拖拽
    disableDrag: bool,
    onDragStart: func,
    onDrag: func, 告诉父级 现在的进度
    onDragEnd: func 已经拖完了
};
```
<Progress progress={0.5} onDragStart={} onDrag={}>
```js
onTouchStart
onTouchMove
onTouchEnd
```
