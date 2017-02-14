import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { requestDetailData } from '../actions'

class Detail extends Component {
  static fetch(dispatch, params) {
    return dispatch(requestDetailData(params.id))
  }

  componentDidMount() {
    const detail = this.props.detail
    if (detail.id == this.props.params.id) {
      return
    }

    this.constructor.fetch(this.props.dispatch, this.props.params)
  }

  render() {
    const detail = this.props.detail
    return (
      <div className="popular-container">
        <div className="popular-title">{detail.title}</div>
        <p className="popular-reason">{detail.content}</p>
        <img src={detail.thumdImage} />
        <div><Link to="/">回到列表</Link></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Detail)
