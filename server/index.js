const express = require('express')
const app = express();
const port = 3000;
const sequelize = require('./model/index')
const router = require('./router');

app.use(express.json());
app.use(router);

app.get('*', (req, res) => {
  res.status = 404;
  res.send('Page not found');
});

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log('Failed to connect: ', error);
  }
})();
