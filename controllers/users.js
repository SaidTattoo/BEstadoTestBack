const { response, request } = require("express")

const { getConnection } = require('../database/database')

const getUsers = ( req  , res = response  ) => {  
    const users  = getConnection().get('users').value();
    res.json({
       codeResponse: 200,
       data: users
    })
}
module.exports = {
    getUsers
    //...... otras funciones... 
}