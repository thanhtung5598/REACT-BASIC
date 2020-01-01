import React, { Component, Fragment } from 'react'
import Accordion from "./components/Accordions/Accordion";

export default class AccordionApp extends Component {
    render() {
        return (
            <Fragment>
                <Accordion header="Click here">
                   This is content of Accordion
                </Accordion>
            </Fragment>
        )
    }
}
