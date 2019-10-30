import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import { addComment, deleteComment, getComments } from '../../redux/actions'


// import './index.css'
class App extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  }
  // state = {
  //   comments: [{ user: "xxx", comment: "不错" }, { user: "xxx1", comment: "不错1" }, { user: "xxx2", comment: "不错2" }]
  // }
  componentDidMount () {

    this.props.getComments()
  }
  render () {
    const { comments, addComment, deleteComment } = this.props
    return (
      <div style={{ margin: "0 auto", width: "80%" }}>
        <h1>react评价</h1>
        <CommentAdd addComment={addComment} />
        <CommentList comments={comments} deleteComment={deleteComment} />
      </div>
    )
  }
}
export default connect(
  state => ({ comments: state.comments }),
  { addComment, deleteComment, getComments }
)(App)