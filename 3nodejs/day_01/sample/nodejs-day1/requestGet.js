const https = require('https')

var options = {
  hostname: 'api.douban.com',
  port: 443,
  method: 'GET',
  path: '/v2/movie/top250'
}

var responseData = ''

var request = https.request(options, (response) => {
  // console.log(response)
  // console.log(response.statusCode)
  // console.log(response.headers)
  response.setEncoding('utf8')
  response.on('data', (chunk) => {
    responseData += chunk
  })
  response.on('end', () => {
    JSON.parse(responseData).subjects.map((item) => {
      console.log(item.title)
    })
  })
})

request.on('error', (error) => {
  console.log(error)
})

request.end()