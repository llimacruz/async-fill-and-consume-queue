'use strict';

let async = require('async');
var clientList = require('./clientList')

const smartQueue = (() => {

  const initProcess = (cbBuscaTodos) => {
    console.log('Início da busca de users')
  
    let resto = 10;
    let users = [];

    async.whilst(
      function() { return resto > 0; },
      function(callback) {
          resto -= 1;
          clientList((partialUsers) => {
            users = users.concat(partialUsers);
            console.log('users', users.length)
            callback();
          });
      },
      (err) => {
        if (err) {
          console.log('Error async.whilst: ', err);
          return callback(err);
        } else {
          console.log('fim da leitura')
          return cbBuscaTodos(null, users);;
        }
      }
    );
  };
  return {
    initProcess
  };
})();

module.exports = smartQueue;
