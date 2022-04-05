import React, { Component } from "react"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import "./style.css"


class Header extends Component {
    render() {
        return(
            <>
                <div id="header">
                    <h1>Welcome to Crypto Tinder!!!</h1>
                </div>
            </>
        )
    }
}

export default Header