// const cluster = require('cluster');
// process.env.UV_THREADPOOL_SIZE = 1;

// if (cluster.isMaster) {
//   // If cluster is in master mode, then the file will be executed again
//   // in child mode.
//
//     cluster.fork();
//     cluster.fork();
//
// } else {
  // Execute it as a child mode. Child mode is nothing but a server instance.

  const express = require('express');
  const app     = express();
  const crypto = require('crypto');

  function doWork(duration) {
    const start = Date.now();
    while((Date.now() - start) < duration) {
      //do nothing!
    }
  }

  app.get('/', (req, res) => {
    // doWork(5000);
    const start = Date.now();
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      console.log('The hash function took ' + (Date.now() - start) + ' ms.');
      res.send('Hi there!');
    });
  });

  app.get('/dash', (req, res) => {
    res.send('This was dash fast!!');
  });

  app.listen(1500, () => {
    console.log('App has started on port 1500');
  });

// }
