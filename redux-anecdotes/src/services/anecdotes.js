import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (anecdote) => {
  const res = await axios.post(baseUrl, anecdote)
  return res.data
}

const update = async (id, updatedAnecdote) => {
  const res = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return res.data
}

const functions = { getAll, createNew, update }

export default functions
