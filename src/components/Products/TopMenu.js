import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand,Nav,NavItem,NavLink,NavbarText } from 'reactstrap';

export default class Products extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">CoderX</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/Home">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/Products">Products</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Thanh Tung</NavbarText>
                </Navbar>
            </div>
        )
    }
}
