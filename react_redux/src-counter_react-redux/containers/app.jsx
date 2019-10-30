// import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Click from './click'
import Redux from '../components/redux'
import { increment, decrement } from '../redux/actions'
export default connect(
  state => ({ number: state }),
  { increment, decrement }
)(Redux)