import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
  render() {
    return (
      <div>some thing</div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps
)(Index)
