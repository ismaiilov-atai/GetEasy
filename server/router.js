const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.end('Hello from A!')
});

module.exports = router