import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class CommentAdd extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    user: '',
    comment: ''
  }
  userChange = (event) => {
    const user = event.target.value
    this.setState({ user })
  }
  commentChange = (event) => {
    const comment = event.target.value
    this.setState({ comment })
  }
  handelSubmit = (event) => {
    event.preventDefault()
    const comment = this.state
    this.props.addComment(comment)
    this.setState({
      user: '',
      comment: ''
    })
  }
  render () {
    const { user, comment } = this.state
    return (
      <div className="add">
        <form>
          <div className="user">
            <label style={{ width: "100%", display: "block" }}>用户名：</label>
            <input type="text" onChange={this.userChange} value={user} /></div>
          <div className="comment">
            <label style={{ width: "100%", display: "block" }}>评论内容：</label>
            <textarea rows="6" onChange={this.commentChange} value={comment}></textarea></div>
          <button onClick={this.handelSubmit}>提交</button>
        </form>
      </div>
    )
  }
}