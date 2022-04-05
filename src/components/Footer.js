import React, { Component } from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import "./style.css"

class Footer extends Component {
    render() {
        return(
            <>
                <div id="footer">
                    <Nav
                        justified
                        vertical
                    >
                    <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Link
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                    </NavItem>
                    </Nav>

                    <p id="copyFooter">Copyright &copy; 2022 Curtis Marc</p>
                </div>
            </>
        )
    }
}

export default Footer