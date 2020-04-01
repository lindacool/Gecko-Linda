if (process.env.NODE_ENV !== 'production') require('dotenv').config()

//process.env.varnamnet

const config = {
  databaseURL: process.env.DATABASE,
  mail: process.env.MAIL
}

module.exports = config;