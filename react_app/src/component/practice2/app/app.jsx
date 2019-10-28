import React, { Component } from 'react'

import Search from '../search/search'
import List from '../list/list'

export default class App extends Component {
  state = {
    searchName: ''
  }
  setSearchName = (searchName) => {
    if (searchName)
      this.setState({ searchName })
  }
  render () {
    const { searchName } = this.state
    return (<div>
      <Search setSearchName={this.setSearchName} />
      <List searchName={searchName} />
    </div>
    )
  }
}