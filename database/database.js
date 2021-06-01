const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

let db 
async function createConnection(){
    const adapter = new FileAsync('data/db.json')
    db = await low(adapter)
    db.defaults({
        users:[]
    })
}

const getConnection = () => db;


module.exports = {
    createConnection,
    getConnection
}