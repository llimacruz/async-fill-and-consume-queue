let counter = 1;

module.exports = (item, callback) => {
  setTimeout(() => {
    console.log('processei', item)
    callback();
  }, 200);
};
