const express = require('express')
const router = express.Router()
const insertUser = require('./controller/userController');
const insertItem = require('./controller/itemController');
const offer = require('./controller/offerController');
const { getAllItems, getOwnItems } = require('./controller/homeController');
const authMiddleware = require('./middlewares/auth');

router.post('/user', insertUser);
router.post('/item', insertItem);
router.post('/offer', offer);
router.get('/', authMiddleware, getAllItems);
router.get('/:userId', getOwnItems);


module.exports = router;