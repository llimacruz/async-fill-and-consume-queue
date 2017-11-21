let counter = 1;

module.exports = (callback) => {
  setTimeout(()=> {
    callback([
      (counter++).toString(),
      (counter++).toString()
    ]);
  },
  1000);
};