import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    api_key: '123',
  },
})

const services = {
  savePerfume: (objPerf) => {
    return new Promise((resolve, reject) => {
      api
        .post('/perfumes', objPerf)
        .then((result) => {
          resolve(result)
        })
        .catch((erro) => {
          reject(erro)
        })
    })
  },
  getAllPerfumes: () => {
    return new Promise((resolve, reject) => {
      api
        .get('/perfumes')
        .then((response) => {
          console.log(response.data)
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default services
