[source](https://www.jianshu.com/p/325ba98770a2)

- react 中添加事件监听怎么做？  有什么感觉？
    为 React 的组件添加事件监听是很简单的事情，你只需要使用 React.js 提供了一系列的 on* 方法即可
    event  是包装过的react 事件对象

- 有一只狗，不允许别人摸它，一旦摸它就会叫，然后就跑了；这只狗跑一段时间（2000s）以后就会停下来，也不叫了。
    完成 Dog 组件，当用户点击的时候会执行自身的 bark 和 run 方法。给这个 Dog 组件加上状态 isRunning 和 isBarking，在进行相应的动作的时候设置为 true，停下来的时候设置为 false

- 电脑的显示器  
    - 完成两个组件，电脑 Computer 和显示器 Screen
        电脑有个 status 状态表示电脑现在是开还是关的，status 为 on 为开，status 为 off 为关，默认状态为 off。电脑有个按钮，点击可以自由切换电脑的开关状态。
    - 显示器接受一个名为 showContent 的 props，显示器会把它内容显示出来。如果不传入 showContent，显示器显示 “无内容”。
    - 电脑包含显示器，当电脑状态为开的时候显示器显示“显示器亮了”，否则显示“显示器关了”。