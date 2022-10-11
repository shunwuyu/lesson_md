import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('已挂载')
    }
    componentWillUnmount() {
        console.log('将卸载')
    }
    componentDidUpdate() {
        console.log('跟新了')
    }
    shouldComponentUpdate(prev) {
        if (this.props.count % 2 == 0) {
            return false;
        }
        return true;
    }
    render() {
        return (
            <div>
                Home {this.props.count}
            </div>
        )
    }
}

export default Home