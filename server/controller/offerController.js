const db = require('../model/index');

const insertUser = async (req, res) => {
  const {price, when, itemId} = req.body;
  try {
    const offer = await db.offer.create({price, when, itemId});
    res.status = 201;
    res.send(offer);
  } catch (error) {
    console.log('Failed ', error)
  }

}

module.exports = insertUser;