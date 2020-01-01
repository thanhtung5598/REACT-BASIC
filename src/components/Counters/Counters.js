import React, { Component } from 'react'

export default class Counters extends Component {
    constructor(props){
        console.log('Constructor counter');
        super(props)
        this.state={
            count:0
        }
    }

    increase(){
        this.setState({
            count:this.state.count+1
        })
    }

    decrease(){
        this.setState({
            count:this.state.count-1
        })
    }

    render() {
        console.log('Counter Render');
        
        return (
            <div className="Counter">
                <button onClick={()=>this.decrease()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.increase()}>+</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("Counter did mount");
        
    }
    
    componentDidUpdate(){
        console.log("Counter did update");
    }

    componentWillUnmount(){
        console.log("Counter will unmount");
    }
}
