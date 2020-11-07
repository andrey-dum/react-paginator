
import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/gaearon/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getItems = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getItems()
  }, [])
  return { loading, data }
}