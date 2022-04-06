import React, { Component } from "react"
import cryptoImage from "../assets/cryptoImage.png"

class Home extends Component {
    render() {
        return(
            <>
                <h1>Home</h1>
                <img src={cryptoImage} alt="no image found" width="500px"></img>
            </>
        )
    }
}

export default Home