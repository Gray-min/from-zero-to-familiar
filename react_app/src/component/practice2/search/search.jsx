import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }

  state = {
    searchName: ''
  }
  handelSearch = () => {
    const { searchName } = this.state
    this.props.setSearchName(searchName)

  }
  handelChange = (event) => {
    const searchName = event.target.value
    this.setState({ searchName })
  }
  render () {
    const { searchName } = this.state
    return (<div style={{ backgroundColor: 'grey', padding: "20px" }}>
      <h2>Search GitHub Users</h2>
      <input type="text" onChange={this.handelChange} value={searchName} /><button onClick={this.handelSearch}>Search</button>
    </div>
    )
  }
}