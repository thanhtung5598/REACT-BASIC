import React, { Component } from 'react'
import RouterDemo from "./components/Router/RouterDemo";

export default class IndexRouterDemo extends Component {
    render() {
        const NumberContext = React.createContext();
        return (
            <NumberContext.Provider value={10}>
                <div>

                    <NumberContext.Consumer>
                        {
                            (context) => <h1>{context}</h1>
                        }
                    </NumberContext.Consumer>

                    <RouterDemo />
                </div>
            </NumberContext.Provider>
        )
    }
}
