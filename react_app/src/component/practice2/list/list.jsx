import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import './index.css'
export default class List extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }
  state = {
    initView: true,
    loading: false,
    users: null,
    error: null,
  }
  componentWillReceiveProps (prop) {
    console.log(prop)
    const { searchName } = prop
    this.setState({ initView: false, loading: true })
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        console.log(response)
        const users = response.data.items.map((user, index) => ({ name: user.login, url: user.html_url, avatarUrl: user.avatar_url }))
        this.setState({ loading: false, users })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
  render () {
    const { initView, loading, users, error } = this.state
    if (initView) {
      return <h2>输入用户名搜索{this.props.searchName}</h2>
    }
    else if (loading) {
      return <h2>loading...</h2>
    }
    else if (error) {
      return <h2>{error}</h2>
    }
    else {
      return users.map((user, index) => (
        <div className="item">
          <a href={user.url}>
            <img src={user.avatarUrl} alt="" style={{ width: 100 }} />
          </a>
          <p>{user.name}</p>
        </div>))
    }
  }
}