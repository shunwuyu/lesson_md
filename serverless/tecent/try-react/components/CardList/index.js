import React from 'react'
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import axios from 'axios';
import './index.less'

const { Meta } = Card

export default class CardList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      cardList: []
    }
  }
  componentDidMount() {
    this.getMenuAPIList(this.props.keyword)
  }

  renderCardList (data) {
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

  getMenuAPIList () {
      const num = 12
      axios
      .get('/card')
      .then(res => {
        console.log(res, '--------------');
        // if (res.data.recipes.status === 0) {
        //   console.log(res.data.recipes);
        // }
        if (res.data.cards.status === 0) {
          let cardList = this.renderCardList(res.data.cards.result.list)
          this.setState({
            cardList: cardList
          })
        }
      })
  }

  render() {
    return (
      <div className="content">
        {this.state.cardList}
      </div>
    )
  }
}