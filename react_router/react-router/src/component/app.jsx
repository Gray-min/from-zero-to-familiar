import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import About from '../view/about'
import Home from '../view/home'
import MyNavLink from './mynavlink'
import './app.css'
export default class App extends Component {
  render () {
    return (

      <div>
        <div className="top">
          reactRouter基本使用
        </div>
        <div className="main">
          <div className="left">
            <MyNavLink className="navlink" to="/about">About</MyNavLink>
            <MyNavLink className="navlink" to="/home">Home</MyNavLink>
          </div>
          <div className="right">
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/home" component={Home}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}