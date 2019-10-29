import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
export default class App extends Component {
  handelClick = () => {
    Toast.info("提交")
  }
  render () {
    return (
      <div>
        <Button type="primary" onClick={this.handelClick}>提交</Button>
      </div>
    )
  }
}