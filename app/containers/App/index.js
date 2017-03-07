import React, { Component, PropTypes } from 'react'

import '../../../node_modules/normalize.css'

export default class App extends Component {

  render() {
    return (
      <div className="app-container">
        { this.props.children }
      </div>
    )
  }

}
