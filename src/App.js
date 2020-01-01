import React, { Component } from 'react';
// import TrafficLight from './components/traffic/TrafficLight';
import TodoItems from './components/TodoItems/TodoItem';
import tickIcon from './components/TodoItems/img/tick.png'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newItems: "",
      items: [
        { title: "Đá bóng", isComplete: true },
        { title: "Nhảy dây" },
        { title: "Bắn bi" }
      ]
    }

  }

  onItemClicked = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const { items } = this.state;
      const index = items.indexOf(item);
      this.setState({
        items: [
          ...items.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...items.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp = (event) => {
    let text = event.target.value;
    if (!text) return
    if (event.keyCode === 13) {
      this.setState({
        newItems: '',
        items: [
          { title: text, isComplete: false },
          ...this.state.items
        ]
      })
    }
  }

  onChangeValue = (event) => {
    let { value } = event.target;
    this.setState({
      newItems: value
    })
  }

  onClickAllItems = () => {
    let allItems = [...this.state.items];
    allItems.forEach((item)=>{
      item.isComplete=true
    })
    this.setState({
      newItems: '',
      items: [
        ...allItems
      ]
    })
  }

  render() {
    const { items, newItems } = this.state
    return (
      <div className="TodoItems">
        <div className="Header">
          <img
            src={tickIcon}
            width={35} alt="Unload"
            onClick={this.onClickAllItems}
          />
          <input
            type="text"
            placeholder="Add New Item"
            onKeyUp={this.onKeyUp}
            value={newItems}
            onChange={this.onChangeValue}
          />
        </div>
        {
          items.length > 0 && items.map((item, index) => {
            return (
              <TodoItems
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
              />
            )
          })
        }
        {
          items.length === 0 && "Nothing here"
        }
      </div>
    )
  }
}