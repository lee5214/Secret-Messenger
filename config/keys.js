//keys.js - decide which credentials to return

if (process.Env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  modules.exports = require('./dev');
}
//database_user
//52145214