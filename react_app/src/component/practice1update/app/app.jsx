import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
// import './index.css'
export default class MyForm extends Component {
  state = {
    comments: [{ user: "xxx", comment: "不错" }, { user: "xxx1", comment: "不错1" }, { user: "xxx2", comment: "不错2" }]
  }
  componentDidMount () {
    PubSub.subscribe('delete', (msg, index) => {
      this.deleteComment(index)
    })
  }
  addComment = (comment) => {
    const { comments } = this.state
    comments.unshift(comment)
    this.setState({ comments })
  }
  deleteComment = (index) => {
    const { comments } = this.state

    comments.splice(index, 1)
    this.setState({ comments })
  }
  render () {
    const { comments } = this.state
    return (
      <div style={{ margin: "0 auto", width: "80%" }}>
        <h1>react评价</h1>
        <CommentAdd addComment={this.addComment} />
        <CommentList comments={comments} />
      </div>
    )
  }
}