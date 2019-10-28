import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './index.css'
export default class CommentList extends Component {


  static propTypes = {
    comments: PropTypes.array.isRequired,
  }
  render () {

    const { comments } = this.props
    const display = comments.length === 0 ? 'block' : 'none'
    return (
      <div className="list">
        <label style={{ display: "inline-block" }}>评论回复</label>
        <div style={{ display }}>暂无评论，请在左侧添加 </div>
        {
          comments.map((comment, index) => <CommentItem comment={comment} key={index} index={index} />)
        }

      </div>
    )
  }
}