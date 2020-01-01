import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {
    render() {
        const { item,onClick } = this.props;
        return (
            <div onClick={onClick} className={item.isComplete===true ? "TodoItem TodoItem-isComplete" : "TodoItem"}>
                <p>{item.title}</p>
            </div>
        )
    }
}
