'use strict';

let async = require('async');
var clientDelete = require('./clientDelete')

const parallelCount = 2;

const processQueue = (() => {

  const fillQueue = (items) => {
    items.forEach((user) => {
      queue.push(user);
      console.log('item added', user)
    });
  };

  const queue = async.queue((item, callback) => {
    clientDelete(item, (err) => {
      if (err) {
        console.log('Error processing item: ', err)
      }
      callback();
    });
  }, parallelCount);

  queue.drain = () => {
    console.log('Queue is empty.');
  };

  return {
    queue,
    fillQueue
  };
})();

module.exports = processQueue;
