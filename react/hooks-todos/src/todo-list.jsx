import React from "react";
import { List, Icon } from "antd";
import classNames from "classnames";

const TodoList = ({ todos }) => {
    return (
        <div className="list-wrap">
          {todos.length === 0 ? (
            <p>暂无待办事项</p>
          ) : (
            <List
            itemLayout="horizontal"
            dataSource={todos}
            renderItem={({ id, text, finished }, idx) => {
                const className = classNames({
                "list-item": true,
                "list-item__finished": finished
                });
                return (
                    <List.Item className={className}>
                        <div
                        className="list-item-wrap"
                        >
                        <span className="list-item-text">{text}</span>
                        {/* <Icon type="delete" onClick={onDelete} /> */}
                        </div>
                    </List.Item>
                )
            }}
            />
          )
        }
        </div>
    )
}

export default TodoList