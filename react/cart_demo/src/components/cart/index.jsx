import React, { useState, useEffect } from "react"
import "./index.css"
import { List, Typography } from "antd"
import CartItem from "./CartItem"

// const cartData = Array(5)
//   .fill(undefined)
//   .map((v, i) => ({
//     id: i,
//     name: `商品${i}`,
//     checked: true,
//     price: Math.round(Math.random() * 100),
//   }))

export default function Cart() {
    const [cartData, setCartData] = useState(Array(5)
    .fill(undefined)
    .map((v, i) => ({
      id: i,
      name: `商品${i}`,
      checked: false,
      price: Math.round(Math.random() * 100),
    })))
    const [total, setTotal] = useState(0)
    const [checkedAll, setCheckedAll] = useState(false)
    useEffect(() => {
        // console.log('------------')
        let totalPrie = cartData.filter(item => item.checked).reduce((prev, item)=> {
            return prev + item.price
        }, 0)
        setTotal(totalPrie)
        // console.log(cartData.some(item => !item.checked), '------')
        setCheckedAll(!cartData.some(item => !item.checked))
    }, [cartData])

    const onWrapCheckedAllChange  = () => {
        let newData = cartData.map(item => {
            item.checked = !checkedAll
            return item
        });
        // console.log(newData);
        setCartData([
            ...newData
        ])
        // setCheckedAll(!checkedAll)

    }
    const onCheckedChange = (item) => {
        // let newItem = {...item, checked:!checked}
        // console.log(item, checked)
        let idx = cartData.findIndex(data => item == data )
        cartData[idx].checked = !cartData[idx].checked
        setCartData([
            ...cartData
        ])
    }
    const Footer = (
    <div className="footer">
        <div className="check-all">
        <input
            checked={checkedAll}
            onChange={onWrapCheckedAllChange}
            type="checkbox"
        />
        全选
        </div>
        <div>
        价格总计 <Typography.Text mark>${total}</Typography.Text>
        </div>
    </div>
    )
    return (
        <div className="cart">
            <List
                header={<div>购物车</div>}
                footer={Footer}
                bordered
                dataSource={cartData}
                renderItem={item => {
                    const checked = false
                    return (
                        <List.Item>
                            <CartItem item={item}  onCheckedChange={onCheckedChange}/>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}