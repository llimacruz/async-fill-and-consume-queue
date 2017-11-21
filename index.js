var usersReader = require('./lib/leitura')
var queueProcessor = require('./lib/processamento')

usersReader.initProcess((err, users) => {
  if (err) {
    console.log('não foi possível ler')
  }
  queueProcessor(users, () => {
    console.log('fim da coisa')
  });
  // queueProcessor.fillQueue(users, () => {
  //   console.log('fim da coisa')
  // });
});