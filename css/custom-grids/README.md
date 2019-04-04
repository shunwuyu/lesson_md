## 符合 bootStrap 标准的栅格系统
[移动设备优先](https://getbootstrap.com/docs/4.3/layout/overview/)
[grid option](https://getbootstrap.com/docs/4.3/layout/grid/)
## 栅格系统
- why 12
  12是1，2，3，4，6的最小公倍数，所以12列栅格系统相对较灵活，
  支持将一行分成1列，2列，3列，4列，6列

## stylus
- 插值
Stylus支持通过使用{}字符包围表达式来插入值
- 循环
  $cols = 12
  for $c in 1 2 3 4 5 6 7
  for $c in 1..$cols
  从 1 到 $cols 进行循环.
  界限操作符 1..5 意思是从 1 开始, 一直到 5
- 自定义断点
```stylus
$query = {     
  normal: '',
  xs: 'max-width: 768px',
  sm: 'min-width: 768px',
  md: 'min-width: 992px',
  lg: 'min-width: 1200px',
  xl: 'min-width: 1920px',
}
```
- @extend 继承