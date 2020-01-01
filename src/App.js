import React, { Component } from 'react';
import TrafficLight from './components/traffic/TrafficLight'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        currentColor: "GREEN"
    }
    setInterval(() => {
        this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        })
    }, 1000)
};

getNextColor(color) {
    switch (color) {
        case "RED": return "ORANGE";
        case "ORANGE": return "GREEN";
        default:
            return "RED";
    }
}
  render() {
    const {currentColor} = this.state
    return (
      <div className="TodoItems">
        <TrafficLight currentColor={currentColor}/>
      </div>
    )
  }
}