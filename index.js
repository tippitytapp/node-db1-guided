const server = require("./api/server.js");
const colors= require('colors');
const morgan = require('morgan');
const helmet = require('helmet');

const PORT = process.env.PORT || 4666;
const NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'development'){
  server.use(morgan('dev'))
}

server.listen(PORT, () => {
  console.log(`\n Server running in ${NODE_ENV} mode on http://localhost:${PORT}...\n`.rainbow.underline.bold);
});
