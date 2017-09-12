const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send({hi: 'there'})
})

const PORT = process.env.PORT || 5000 //environment variables from heroku (for production)


app.listen(PORT)