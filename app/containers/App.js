import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import '../../node_modules/normalize.css'
import './style.css'

class App extends Component {

  render() {
    return (
      <div className="app-container">
        { this.props.children }
      </div>
    )
  }

  componentDidMount() {
  }
}

App.propTypes = {
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
