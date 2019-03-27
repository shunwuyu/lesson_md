1. 计算如下 box1，box2 两个盒子模型的宽高，并简要列出计算过程
content>padding>border>margin>position
100x100>20-0-0-0>20
```css
.box {
  width: 100px;
  height: 100px;
  padding-top: 20px;
  margin-top: 20px;
  border: 2px solid aqua;
}
.box1 {
  box-sizing: border-box;
}
```
```html
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

1. assert/cat 目录下面，有一只猫的所有元素，请实现如 assert/cat/cat-animation.mp4 的动画.
  要求：

- 猫身体需要在屏幕 `水平垂直居中` 的位置；
- 只需要 `猫爪` 和 `猫尾` 运动即可；
- 用背景图时，图片容器宽高可以取图片宽高，可用markMan量出；
- 实现效果和 assert/cat/cat-animation.mp4 `类似` 即可；
  
3. 查找元素练习, 完成 script 里面的函数编写
```js
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>IFE ECMAScript</title>
</head>

<body>
  <div id="wrapper">
    <div id="news-top" class="section">
      <h3>Some title</h3>
      <div class="content">
        <ul>
          <li><span>HTML</span><a href="">Some Link1</a></li>
          <li><span>JS</span><a class="active" href="">Some Link2</a></li>
          <li><span>CSS</span><a href="">Some Link3</a></li>
          <li><span>JS</span><a href="">Some Link4</a></li>
        </ul>
      </div>
      <img src="">
      <p class="">Some Text</p>
    </div>
    <div id="news-normal" class="section">
      <h3>Some title</h3>
      <div class="content">
        <ul>
          <li><span>HTML</span><a href="">Some Link1</a></li>
          <li><span>HTML</span><a href="">Some Link2</a></li>
          <li><span>JS</span><a class="active" href="#">Some Link3</a></li>
          <li><span>CSS</span><a href="">Some Link4</a></li>
        </ul>
      </div>
      <img src="">
      <p class="">Some Text</p>
    </div>
  </div>
  <script>

    function getAllListItem() {
      // 返回页面中所有li标签
    }

    function findAllHtmlSpanInOneSection(sectionId) {
      // 返回某个section下所有span中内容为HTML的span标签
    }

    function findListItem(sectionId, spanCont) {
      // 返回某个section下，所有所包含span内容为spanCont的LI标签
    }

    function getActiveLinkContent(sectionId) {
      // 返回某个section下，class为active的链接中包含的文字内容
    }
  </script>
</body>

</html>
```

4. 使用weui组件+js，将form表单数据添加至表格中(见images中  weui+js.png)

5. 按照设计稿，实现效果（images中 mine.png）
