import React, { Component } from "react"
import { Card, CardTitle, CardText, Col } from 'reactstrap'

class CryptoShow extends Component {
    render() {
        let { crypto } = this.props
        return (
            <>
                <h3>Crypto Description</h3>
                <Col sm="6">
                    {crypto &&
                        <Card body>
                            <CardTitle>Hi, my name is {crypto.name}!</CardTitle>
                            <img src={this.props.crypto.image} alt="sexy crypto" />
                            <CardText>I am {this.props.crypto.age} years old. My creator is {this.props.crypto.creator}.</CardText>
                        </Card>
                    }
                </Col>
            </>
        )
    }
}

export default CryptoShow
