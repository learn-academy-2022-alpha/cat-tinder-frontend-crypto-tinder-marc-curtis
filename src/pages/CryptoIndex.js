import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers"
import React, { Component } from "react"
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CryptoIndex extends Component {
    render() {
        return (
            <>
                <h3>Meet the Cryptos!</h3>
                <br />
                <Col sm="6">
                    {this.props.cryptos && this.props.cryptos.map(cryptos => {
                        return (
                            <Card body key={cryptos.id}>
                                <CardTitle>
                                    <NavLink to={`/cryptoshow/${cryptos.id}`}>{cryptos.name}</NavLink>
                                </CardTitle>
                            </Card>
                        )
                    })}
                </Col>
            </>
        )
    }
}

export default CryptoIndex
