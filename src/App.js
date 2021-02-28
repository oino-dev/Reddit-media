import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Favorite from './Components/Favorite/Favorite'

let arr = {}

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} arr={arr} />
          <Route path='/favorite' component={Favorite} arr={arr} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
