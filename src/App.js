import React, { Component } from 'react';
import TodoItem from './components/TodoItem'

export default class App extends Component {
  constructor() {
    super();
    this.todoItems = ["đá banh", "đá cầu", "cầu long"]
  }

  render() {
    return (
      <div className="TodoItem">
        {
          this.todoItems.map((item,index)=><TodoItem key={index} title={item} />)
        }
      </div>
    )
  }
}