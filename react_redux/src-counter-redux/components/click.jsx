import React, { Component } from 'react'
export default class Click extends Component {
  state = {
    number: 2,
    add: 2
  }
  handelChange = (event) => {
    const add = event.target.value
    this.setState({ add })
  }
  handelAdd = () => {
    const { number, add } = this.state
    this.setState({ number: parseInt(number) + parseInt(add) })
  }
  handelde = () => {
    const { number, add } = this.state
    this.setState({ number: parseInt(number) - parseInt(add) })
  }
  handelincrementifodd = () => {
    const { number, add } = this.state
    if (add % 2 === 1)
      this.setState({ number: parseInt(number) + parseInt(add) })
  }
  handelasync = () => {
    const { number, add } = this.state
    setTimeout(() => {
      this.setState({ number: parseInt(number) + parseInt(add) })
    }, 1000)

  }
  render () {
    const { number, add } = this.state
    return (
      <div>
        <h2>click {number} number</h2>
        <div>
          <select value={add} onChange={this.handelChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          &nbsp;
          <button onClick={this.handelAdd}>+</button>
          &nbsp;
          <button onClick={this.handelde}>-</button>
          &nbsp;
          <button onClick={this.handelincrementifodd}>increment if odd</button>
          &nbsp;
          <button onClick={this.handelasync}>async</button>
        </div>
      </div>
    )
  }
}