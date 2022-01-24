import axios from 'axios'

export default axios.create({
    baseURL:"https://www.omdbapi.com"
})
//apikey.aspx?VERIFYKEY=2b1905e8-3cd4-4863-9c5a-0fec44b99606"
//http://www.omdbapi.com/?apikey=[yourkey]&