import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/1074d01602791519c73ab080f17bd948/jd-api',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }, {
      baseURL: 'https://www.fastmock.site/mock/1074d01602791519c73ab080f17bd948/jd-api'
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/1074d01602791519c73ab080f17bd948/jd-api',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log('axios error')
      reject(err)
    })
  })
}
