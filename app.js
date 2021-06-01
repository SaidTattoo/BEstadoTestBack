const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const options = require("./swaggerOptions");
require('dotenv').config();

const app = express();

//middlewares
app.use(cors());
const specs = swaggerJSDoc(options);
app.use('/docs',swaggerUI.serve , swaggerUI.setup(specs));


//my routes endpoints
const userPath = '/api/usuarios' 

app.use(userPath, require('./routes/users.routes'))


module.exports = app