import React, { Component } from "react";
import {Card, CardBody, CardTitle, CardText, Button, NavLink
} from 'reactstrap'

export default class CryptoShow extends Component {
    render() {
        let { crypto } = this.props
        return(
            <div className="show-body">
                <h1>s</h1>
                <Card>
                <CardBody>
                    <CardTitle className="show-title">
                    { crypto.name }
                    </CardTitle>
                </CardBody>
                <img
                    alt="Card image cap"
                    src={crypto.image}
                    width="100%"
                />
                <CardBody>
                    <CardText>
                    {crypto.name} was created by {crypto.creator} {crypto.age} years ago.
                    </CardText>
                </CardBody>
                <CardBody>
                    <NavLink to={`/crypto/${this.props.crypto.id}`}>
                        <Button className="edit-show">Edit</Button>
                    </NavLink>
                </CardBody>
                </Card>
            </div>
        )
    }
}