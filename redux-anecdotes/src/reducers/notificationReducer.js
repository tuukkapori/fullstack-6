const notificationReducer = (state = 'hei', action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.payload
    default:
      return state
  }
}

export default notificationReducer
