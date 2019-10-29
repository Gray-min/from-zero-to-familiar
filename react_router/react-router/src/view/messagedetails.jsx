import React, { Component } from 'react'
export default class MessageDetails extends Component {
  state = {
    messages: [
      { id: 1, title: 'message001', content: 'abc' },
      { id: 3, title: 'message003', content: 'abcd' },
      { id: 5, title: 'message005', content: 'abcdf' }
    ]
  }
  render () {
    const { id } = this.props.match.params
    const message = this.state.messages.find((m) => m.id === id * 1)
    return (
      <ul>
        <li>{message.id}</li>
        <li>{message.title}</li>
        <li>{message.content}</li>
      </ul>
    )
  }
}