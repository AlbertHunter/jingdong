import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
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
