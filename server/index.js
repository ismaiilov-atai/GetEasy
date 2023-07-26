const express = require('express')
const app = express();
const port = 3000;
const db = require('./model/index')
const router = require('./router');

app.use(express.json());
app.use(router);

app.get('*', (req, res) => {
  res.status = 404;
  res.send('Page not found');
});


db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}).catch((err) => {
  console.log('Failed to connect: ', err);  
});

