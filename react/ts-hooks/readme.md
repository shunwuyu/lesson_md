1.  安装 devtool 
2. https://github.com/huzidaha/react-naive-book-examples   看 component结构
[react 小书](http://huziketang.mangojuice.top/books/react/lesson18)
3. 修改 CommentApp.js
  construct、component will mount render  component did mount
  ```
     constructor () {
      super()
     + console.log('construct');
      this.state = {
        comments: []
      }
    }

    + componentWillMount() {
      + console.log('component will + mount')
    + }

    + componentDidMount() {
      + console.log('component did + mount')
    + }

    render() {
    console.log('render')
  ```

