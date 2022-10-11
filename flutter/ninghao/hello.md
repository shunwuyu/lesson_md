- material
- main
  - runApp
    根组件
      Center: Text(
        'hello',
        textDirection: TextDirection.ltr
      )
- 自定义小部件
  class StatelessWidget  没有状态的组件
  覆盖build 方法
  Widget build(BuildContext context) {
    返回组件
  }