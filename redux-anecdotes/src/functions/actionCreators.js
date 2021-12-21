import AC from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecObject = {
      content,
      id: getId(),
      votes: 0,
    }
    const newAnec = await AC.createNew(anecObject)
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: newAnec,
    })
  }
}

export const createVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const res = await AC.update(anecdote.id, updatedAnecdote)
    dispatch({
      type: 'VOTE',
      payload: res,
    })
  }
}

export const resetNotification = () => {
  return {
    type: 'NOTIFICATION',
    payload: '',
  }
}

export const createFilter = (filter) => {
  return {
    type: 'FILTER',
    payload: filter,
  }
}

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await AC.getAll()
    dispatch({
      type: 'INIT',
      payload: anecdotes,
    })
  }
}

export const setNotification = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFICATION',
      payload: message,
    })
  }
}
