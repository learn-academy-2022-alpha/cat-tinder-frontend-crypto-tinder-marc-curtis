import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CryptoIndex from './pages/CryptoIndex'
import CryptoShow from './pages/CryptoShow'
import CryptoNew from './pages/CryptoNew'
import CryptoEdit from './pages/CryptoEdit'
import NotFound from './pages/NotFound'
import mockCryptos from './mockCryptos'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cryptos: mockCryptos
    }
  }
  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cryptoindex" component={CryptoIndex} />
          <Route path="/cryptoshow" component={CryptoShow} />
          <Route path="/cryptonew" component={CryptoNew} />
          <Route path="/cryptoedit" component={CryptoEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App