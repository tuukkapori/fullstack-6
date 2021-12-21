import React from 'react'
import { connect } from 'react-redux'
import { createFilter } from '../functions/actionCreators'

const Filter = (props) => {
  const handleChange = (event) => {
    const filter = event.target.value
    props.createFilter(filter)
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  createFilter,
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter
