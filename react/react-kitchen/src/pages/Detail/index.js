import React from 'react';

const columns = [
  {
    title: '用料',
    dataIndex: 'mname'
  },
  {
    title: '用量',
    dataIndex: 'amount'
  },
  {
    title: '类型',
    dataIndex: 'type'
  }
];

export default class Detail extends React.Component {
  state = {
    menu: this.props.location.state
  }

  render() {
    const menu  = this.state.menu
    return (
      <div className="wrapper">
        <div className="info">
        </div>
      </div>
    )
  }
}