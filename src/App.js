import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import {  Switch, Route} from 'react-router-dom'
// import Favorite from './Components/Favorite/Favorite'
import Home from './Components/Home/Home'


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/'  exact component={Home} />
          {/* <Route path='/favorite' component={Favorite} /> */}
        </Switch>
      </Layout>
    );
  }
}

export default App;
