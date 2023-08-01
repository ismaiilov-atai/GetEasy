const db = require('../model/index');

const insertItem = async (req, res) => {
  const {name, description, weight, userId} = req.body;
  try {
    const insertedItem = await db.item.create(
      {
        name, 
        description, 
        weight,
        userId
      }
    );
    res.status = 201;
    res.send(insertedItem);
  } catch (error) {
    console.log('Failed ', error)
  }

}

module.exports =  insertItem;