# 圣杯布局,是中间栏为两边腾开位置。

# 双飞翼布局,则是中间栏不变，将内容部分为两边腾开位置


# 清除浮动的几种方法
1. 在父元素底部加一行代码 <div style="clear:both;"></div>
2. 给父元素增加一行CSS 
    div.content{
      float:left;
    }

3. 利用BFC简称为“块级格式化上下文”来给父元素增加CSS
    div.content{
      overflow:auto;
      <!-- overflow: scroll -->
      <!-- overflow: hidden -->
    }

4. 使用CSS中的after伪元素,给父元素div添加一个clearfix的class类
    .clearfix:after{
      content: ".";
      display: block;
      height: 0px;
      clear: both;
      visibility: hidden;
    }

5. 更优雅的改进——尼古拉斯大师方法, 
把display设置为table，可以创建一个匿名的表格单元，这个匿名的表格单元可以直接触发BFC，
然后再直接设置<code>content: " ";</code>
把内容设置为一个空格，这样就节省了不必要的代码
  .clearfix:after{
    content: "";
    display: block;
    <!-- height: 0px; -->
    clear: both;
    <!-- visibility: hidden; -->
  }
