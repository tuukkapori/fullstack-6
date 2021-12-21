const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE': {
      return state.map((a) => {
        if (a.id !== action.payload.id) {
          return a
        }

        return {
          ...a,
          votes: a.votes + 1,
        }
      })
    }

    case 'NEW_ANECDOTE': {
      return [...state, action.payload]
    }
    case 'INIT':
      return action.payload
    default:
      return state
  }
}

export default reducer
