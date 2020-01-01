import React, { Component } from 'react';
// import TrafficLight from './components/traffic/TrafficLight';
import TodoItems from './components/TodoItems/TodoItem';
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: "Đá bóng", isComplete: true },
        { title: "Nhảy dây",isComplete: false },
        { title: "Bắn bi" }
      ]
    }
   
  }

  onItemClicked = (item) => {
    return (event) => {
        const isComplete = item.isComplete;
        const {items} = this.state;
        const index = items.indexOf(item);
        this.setState({
          items:[
            ...items.slice(0,index),
            {
              ...item,
              isComplete:!isComplete
            },
            ...items.slice(index+1)
          ]
        })
    }
  }

  render() {
    const { items } = this.state
    return (
      <div className="TodoItems">
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