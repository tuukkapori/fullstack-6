import React from 'react'
import { connect } from 'react-redux'
import {
  createAnecdote,
  setNotification,
  resetNotification,
} from '../functions/actionCreators'

const AnecdoteForm = (props) => {
  const addA = (e) => {
    e.preventDefault()
    const content = e.target.anecdoteInput.value
    e.target.anecdoteInput.value = ''
    props.createAnecdote(content)
    props.setNotification(`New anecdote '${content}'`)
  }
  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={addA}>
        <div>
          <input name="anecdoteInput" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  resetNotification,
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
