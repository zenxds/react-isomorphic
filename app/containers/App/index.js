import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import '../../../node_modules/normalize.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        { React.cloneElement(this.props.children, {...this.props}) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(App)
