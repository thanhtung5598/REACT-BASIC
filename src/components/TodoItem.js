import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { item } = this.props;

        return (
            <div className={item.isComplete ? "TodoItem TodoItem-copleted" : "TodoItem"}>
                <p>{item.title}</p>
            </div>
        )
    }
}
