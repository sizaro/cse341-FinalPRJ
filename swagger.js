const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSEMart',
        description: ''
    },
    host: 'localhost:3000' || 'https://cse341-finalprj.onrender.com',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);