import React, { Component } from 'react'
export default class News extends Component {
  state = {
    newsArr: ["message01", "message02", "message03"]
  }
  render () {
    const { newsArr } = this.state
    return (
      <ul>
        {newsArr.map((news, index) => <li key={index}>{news}</li>)}
      </ul>
    )
  }
}