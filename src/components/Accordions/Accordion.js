import React, { Component } from 'react'
import "./Accordion.css";

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapse: false
        };
    }

    onCLick = () => {
        this.setState({
            isCollapse: !this.state.isCollapse
        })
    }

    render() {
        const { header, children } = this.props
        const { isCollapse } = this.state
        return (
            <div className="Accordion">
                <div class="page-header" onClick={this.onCLick}>
                    {header}
                </div>
                {isCollapse && <div class="page-Content"> {children} </div>}
            </div>
        )
    }

}