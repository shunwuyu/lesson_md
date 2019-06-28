
## 伪类选择器
- :hover用于当用户把鼠标移动到元素上面时的效果；
- :active用于用户点击元素那一下的效果（正发生在点的那一下，松开鼠标左键此动作也就完成了）
- :focus用于元素成为焦点，这个经常用在表单元素上。
  
## CSS3的:nth选择器
- nth-child
  :nth-child(length);/*参数是具体数字*/
	:nth-child(n);/*参数是n,n从0开始计算*/
	:nth-child(n*length)/*n的倍数选择，n从0开始算*/
	:nth-child(n+length);/*选择大于length后面的*/
	:nth-child(-n+length)/*选择小于length前面的*/
	:nth-child(n*length+1);/*表示隔几选一*/
example:
- :nth-child(3),选择某元素下的第三个子元素
- :nth-child(2n),这中方式是前一种的变身，我们可以选择n的2倍数 nth-child(even)
- :nth-child(n+5)这个选择器是选择从第五个元素开始选择

## 区别
ele:nth-of-type(n)是指父元素下第n个ele元素， 
ele:nth-child(n)是指父元素下第n个元素且这个元素为ele
<!-- 第二个 li -->
.demo li:nth-child(2) {
    color: #ff0000;
  }
<!-- li的第二个 -->
  .demo li:nth-of-type(2) {
    color: #00ff00;
  }
他们之前不指定标签类型，：nth-child(2) 选中依旧是第二个元素，无论它是什么标签。而 :nth-type-of(2) 选中了两个元素，分别是父级.demo中的第二个p标签和第二个li标签，由此可见，不指定标签类型时，:nth-type-of(2)会选中所有类型标签的第二个