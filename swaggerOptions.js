const options = {
    definition: {
      openapi: "3.0.0",
      
      info: {
        title: "API Prueba",
        version: "1.0.0",
        description: "App test para front",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./routes/*.js"],
  };
  
  module.exports = options;
  