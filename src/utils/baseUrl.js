let baseUrl = ''
if (process.env.NODE_ENV === 'delopment') {
  baseUrl = 'http://localhost:8080/'
} else {
  baseUrl = 'http://localhost:8080/'
}
export default baseUrl
