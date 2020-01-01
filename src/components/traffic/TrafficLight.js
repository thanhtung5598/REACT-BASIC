import React, { Component } from 'react'
import './TrafficLight.css'

export default class TrafficLight extends Component {
   
    render() {
        const { currentColor } = this.props
        return (
            <div className="TrafficLight">
                <div className={currentColor==="RED" ? "buld red active":"buld red"}></div>
                <div className={currentColor==="ORANGE" ? "buld orange active":"buld orange"}></div>
                <div className={currentColor==="GREEN" ? "buld green active":"buld green"}></div>
            </div>
        )
    }
}
