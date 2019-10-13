1. npm install -g parcel-bundler
2. 这个transform-react-jsx就是将jsx转换成js的babel插件，它有一个pragma项，可以定义jsx转换方法的名称
3.  component.base保存的是组件的dom对象，反过来base._component保存的是dom对象所对应的组件，这个就是为了把他们关联起来