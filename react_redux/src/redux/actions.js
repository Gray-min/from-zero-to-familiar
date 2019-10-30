import { ADDCOMMENT, DELETECOMMENT, RECEIVECOMMENT } from './action-types'
export const addComment = (comment) => ({ type: ADDCOMMENT, data: comment })
export const deleteComment = (index) => ({ type: DELETECOMMENT, data: index })
const receiveComment = (comments) => ({ type: RECEIVECOMMENT, data: comments })
export const getComments = () => {
  return dispatch => {
    const comments = [{ user: "xxx", comment: "不错" }, { user: "xxx1", comment: "不错1" }, { user: "xxx2", comment: "不错2" }]
    setTimeout(() => {
      dispatch(receiveComment(comments))
    })
  }
}