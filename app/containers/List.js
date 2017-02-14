import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { requestListData } from '../actions'

class List extends Component {
  static fetch(dispatch) {
    return dispatch(requestListData())
  }

  componentDidMount() {
    if (this.props.list.length) {
      return
    }

    this.constructor.fetch(this.props.dispatch)
  }

  render() {
    return (
      <div className="popular-list">
        {this.props.list.map(item => {
          return (
            <Link className="list-item" to={`/detail/${item.contentId}`} key={item.contentId}>
              <img src={item.thumdImage} className="list-img" />
              <div className="list-info">
                <div className="list-title">{item.title}</div>
                <div className="list-reason">{item.content}</div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(List)
