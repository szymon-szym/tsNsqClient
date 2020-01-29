import axios from 'axios'

export const API = 'https://jsonplaceholder.typicode.com/todos/'

export const fetchData = async (query:string) => {
    const url = `${API}${query}`
    return await axios.get(url)
}
