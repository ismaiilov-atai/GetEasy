const db = require('../model/index');

const insertAddress = async (req, res) => {
  const {itemId, lat, lng} = req.body;
  try {
    const insertedAddress = await db.address.create(
      {
        itemId,
        lat, 
        lng
      }
    );
    res.status = 201;
    res.send(insertedAddress);
  } catch (error) {
    console.log('Failed ', error);
  }

}

module.exports =  insertAddress;