import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  createVote,
  setNotification,
  resetNotification,
} from '../functions/actionCreators'
import mostVotes from '../functions/mostVotes'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const aFilter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id)
    dispatch(createVote(anecdote))
    dispatch(setNotification(`You voted '${anecdote.content}'`))
  }
  return (
    <div>
      {anecdotes
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(aFilter.toLowerCase())
        )
        .sort(mostVotes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
