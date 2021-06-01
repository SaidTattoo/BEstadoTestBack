require('dotenv').config()

const app = require('./app')
const {createConnection} = require('./database/database')

const port = process.env.PORT


createConnection()
const server = app.listen(port, () => {
    console.log(`server on port ${port}`)
})

module.exports = server