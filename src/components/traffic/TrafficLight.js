import React, { Component } from 'react'
import './TrafficLight.css'

export default class TrafficLight extends Component {
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
        const { currentColor } = this.state
        return (
            <div className="TrafficLight">
                <div className={currentColor==="RED" ? "buld red active":"buld red"}></div>
                <div className={currentColor==="ORANGE" ? "buld orange active":"buld orange"}></div>
                <div className={currentColor==="GREEN" ? "buld green active":"buld green"}></div>
            </div>
        )
    }
}
