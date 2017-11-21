'use strict';

let async = require('async');
var clientDelete = require('./clientDelete')

const parallelCount = 2;

module.exports = (items, finalCallback) => {
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
    finalCallback();
  };

  const fillQueue = (items) => {
    items.forEach((user) => {
      queue.push(user);
      console.log('item added', user)
    });
  };
  
  fillQueue(items);

};
