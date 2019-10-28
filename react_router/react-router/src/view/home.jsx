import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import MyNavLink from '../component/mynavlink'
import News from './news'
import Message from './message'
export default class home extends Component {
  render () {
    return (
      [<div>this is home</div>,
      <ul className="nav">
        <li><MyNavLink style={{ margin: "20px 5px" }} to="/home/news">News</MyNavLink></li>
        <li><MyNavLink style={{ margin: "20px 5px" }} to="/home/message">Message</MyNavLink></li>
      </ul>,
      <div>
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          <Redirect to="/home/news" />
        </Switch>
      </div>
      ]
    )
  }
}