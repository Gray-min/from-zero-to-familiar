import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import MessageDetails from './messagedetails'
export default class Message extends Component {
  state = {
    messages: []
  }
  componentDidMount () {
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'message001' },
        { id: 3, title: 'message003' },
        { id: 5, title: 'message005' }
      ]
      this.setState({ messages })
    }, 1000)
  }
  render () {
    //const { messages } = this.state
    return (
      <div>
        <ul>
          {this.state.messages.map((message, index) =>
            <li key={index}>
              <NavLink to={`/home/message/messagedetail/${message.id}`}> {message.title}</NavLink>
            </li>)}
        </ul>
        <Route path='/home/message/messagedetail/:id' component={MessageDetails} />
      </div>

    )
  }
}