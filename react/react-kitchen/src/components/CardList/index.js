import React from 'react'
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import axios from 'axios';
import './index.css'
const { Meta } = Card

export default class CardList extends React.Component{
  state = {
    cardList: []
  }

  componentDidMount() {
    this.getMenuAPIList(this.props.keyword)
  }

  renderCardList = (data) => {
    // console.log(data)
    return data.map((item) => {
      return (
        <NavLink key={item.id} to={{
          pathname: `/common/detail/${item.id}`,
          state: item
        }} >
          <Card
            hoverable
            className="card"
            cover={<img alt="example" src={item.pic} />}
            onClick={this.openMenuDetail}
            id={item.id}
          >
            <Meta
              style={{ whiteSpace: 'nowrap' }}
              title={item.name}
              description={item.tag}
            />
          </Card>
        </NavLink>
      )
    })
  }

  getMenuAPIList = (keyword) => {
    axios.get('/search')
      .then(data => {
        // console.log(data.data, '------------------')
        if (data.data.search.status === 0) {
          // console.log(data.data.search.result, '++++++++++++++')
          let cardList = this.renderCardList(data.data.search.result.list)
          this.setState({
            cardList: cardList
          })
        }
      })
  }

  render() {
    return (
      <div class="content">
        {this.state.cardList}
      </div>
    )
  }
}