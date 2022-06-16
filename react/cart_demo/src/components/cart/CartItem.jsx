import React from "react"
import { Typography } from "antd"

const CartItem = (props) => {
    const { item, onCheckedChange } = props
    const { name, price, checked } = item
    const onWrapCheckedChange = (e) => {
        onCheckedChange(item)
    }

    return (
        <div className="item-card">
            <div className="checkbox-wrap">
                <input
                type="checkbox"
                checked={checked}
                onChange={onWrapCheckedChange}
                />
            </div>
            <p className="item-info">
                {name} <Typography.Text mark>${price}</Typography.Text>
            </p>
        </div>
    )
}

export default CartItem