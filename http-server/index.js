const http = require('http')
const fs = require('fs')
const args = require('minimist')(process.argv.slice(2), {
  default: {
    port: 5000
  }
})

console.log(args)
let homeText = ''
let projectText = ''
let registrationText = ''

fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeText = home
})

fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectText = project
})

fs.readFile('registration.html', (err, registration) => {
  if (err) {
    throw err
  }
  registrationText = registration
})

http
  .createServer((request, response) => {
    const url = request.url
    // eslint-disable-next-line quotes
    response.writeHeader(200, { 'Content-Type': "text/html" })
    switch (url) {
      // eslint-disable-next-line quotes
      case "/project":
        response.write(projectText)
        response.end()
        break

      // eslint-disable-next-line quotes
      case "/registration":
        response.write(registrationText)
        response.end()
        break

      default:
        response.write(homeText)
        response.end()
        break
    }
  })
  .listen(args.port, function () {
    console.log('Application running on port: ' + args.port)
  })
