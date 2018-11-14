const express = require('express');
const app     = express();

function doWork(duration) {
  const start = Date.now();
  while((Date.now() - start) < duration) {
    //do nothing!
  }
}

app.get('/', (req, res) => {
  doWork(5000);
  res.send('Hi there!');
});

app.listen(1500, () => {
  console.log('App has started on port 1500');
});
