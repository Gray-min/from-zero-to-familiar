import React, { Component } from 'react'
// import Click from './click'
import Redux from './redux'
export default class App extends Component {
  render () {
    return (
      <div>
        <Redux store={this.props.store} />
      </div>
    )
  }
}