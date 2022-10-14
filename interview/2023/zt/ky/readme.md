- 动画相关css 属性
    - transition和animation的区别
        transition是过度属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。
        animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。
    - animation  包含6个属性
        animation-name
        animation-duration
        animation-timing-function 动画将如何完成一个周期  匀速 加速 减速 
        animation-delay 动画在启动前的延迟间隔
        animation-iteration-count 动画的播放次数
        animation-direction 否应该轮流反向播放动画 alternate
        animation-fill-mode  规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式  forwards 停留在那里
        