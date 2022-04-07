import React, { Component } from "react"
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CryptoNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCrypto: {
                name: "",
                age: "",
                creator: "",
                image: ""
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { newCrypto } = this.state
        newCrypto[e.target.name] = e.target.value
        this.setState({newCrypto: newCrypto})
    }

    handleSubmit = () => {
        this.props.createCrypto(this.state.newCrypto)
        this.setState({submitted: true})
    }

    render() {
        return(
            <>
            <h3>Create A New Crypto Profile</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Crypto Name?"
                            onChange={this.handleChange}
                            value={this.state.newCrypto.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            type="text"
                            name="age"
                            placeholder="Crypto Age?"
                            onChange={this.handleChange}
                            value={this.state.newCrypto.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="creator">Creator</Label>
                        <Input
                            type="text"
                            name="creator"
                            placeholder="Crypto Creator?"
                            onChange={this.handleChange}
                            value={this.state.newCrypto.creator}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input
                            type="url"
                            name="image"
                            placeholder="Crypto Image?"
                            onChange={this.handleChange}
                            value={this.state.newCrypto.image}
                        />
                    </FormGroup>
                    
                </Form>
                <Button
                    name="submit"
                    onClick={this.handleSubmit}
                >
                    Create a New Crypto Profile
                </Button>
                {this.state.submitted && <Redirect to="/cryptoindex" />}
            </>
        )
    }
}

export default CryptoNew