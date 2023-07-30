const express = require('express')
const router = express.Router()
const insertUser = require('./controller/userController');
const insertItem = require('./controller/itemController');
const offer = require('./controller/offerController');
const insertAddress = require('./controller/addressController')
const { getAllItems, getOwnItems, checkUser } = require('./controller/homeController');
const authMiddleware = require('./middlewares/auth');

router.get('/check-user', authMiddleware, checkUser)
router.post('/user', insertUser);
router.post('/item', authMiddleware,  insertItem);
router.post('/offer', offer);
router.post('/address', insertAddress);
router.get('/', getAllItems);
router.get('/:userId', getOwnItems);


module.exports = router;