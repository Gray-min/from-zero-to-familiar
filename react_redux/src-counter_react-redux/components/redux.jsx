import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Redux extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }
  state = {
    add: 2
  }
  handelChange = (event) => {
    const add = event.target.value
    this.setState({ add })
  }
  handelAdd = () => {
    const { add } = this.state

    this.props.increment(parseInt(add))
  }
  handelde = () => {
    const { add } = this.state

    this.props.decrement(add)
  }
  handelincrementifodd = () => {
    const { add } = this.state
    const { number, increment } = this.props
    if (number % 2 === 1)
      increment(parseInt(add))
  }
  handelasync = () => {
    const { add } = this.state
    setTimeout(() => {
      this.props.increment(parseInt(add))
    }, 1000)

  }
  render () {
    const { add } = this.state
    const { number } = this.props
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