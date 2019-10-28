import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import './index.css'
export default class CommentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }
  handelDelete = () => {
    const { index } = this.props
    PubSub.publish('delete', index)
  }
  render () {
    const { comment } = this.props
    return (
      <div>
        <div className="delete"><a href="javascript:;" onClick={this.handelDelete}>删除</a></div>
        <p>用户{comment.user}</p>
        <div className="comment-it">{comment.comment}</div>
      </div>
    )
  }
}