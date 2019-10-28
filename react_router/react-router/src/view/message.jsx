import React, { Component } from 'react'
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
      <ul>
        {this.state.messages.map((message, index) => <li key={index}><a href="#">{message.title} </a></li>)}
      </ul>
    )
  }
}