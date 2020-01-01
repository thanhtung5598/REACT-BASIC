import React, { Component } from 'react'
import Counter from "./components/Counters/Counters";
export default class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCounter:true
        }
    }
    removeCounter(){
        this.setState({
            showCounter:!this.state.showCounter
        })
    }
    componentDidUpdate() {
        console.log("App updated");
    }
    render() {
        console.log("App render");
        return (
            <div className="App">
                <button onClick={() => { this.removeCounter() }}>Delete Counter</button>
                { this.state.showCounter && <Counter />}
            </div>
        )
    }
}
