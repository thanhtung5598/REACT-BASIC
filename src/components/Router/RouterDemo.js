import React, { Component } from 'react'
import TopMenu from "./../Products/TopMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./../Products/Products";

function Home() {
    return <h2>Home</h2>;
}

export default class RouterDemo extends Component {
    render() {
        return (
            <Router>
                <TopMenu />
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Products" exact component={Products} />
                </Switch>
            </Router>
        )
    }
}
