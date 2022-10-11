import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
			flag: false
		}
	}

	onClick() {
		const { flag } = this.state;
		this.setState({
			num: this.state.num + 1,
			flag: !flag
		 });
	}

	render() {
		const { flag } = this.state;
		console.log('flag', flag);
		return (
			<div>
				<h1>count: {this.state.num}</h1>
				<button onClick={() => this.onClick()}>add</button>
				{
					flag ?
					<div>ohhhhh</div> : <h2>oyyyyyyyy</h2>
				}
				<div>123</div>
			</div>
		);
	}
}
ReactDOM.render(
	<Counter />,
	document.getElementById('root')
);