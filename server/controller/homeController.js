const db = require('../model/index');

const getAllItems = async (req, res) => {
  try {
    const allItems = await db.user.findAll();
    res.status = 200;
    res.send(allItems);
  } catch (error) {
    console.log('Failed ', error)
  }
}

const getOwnItems = async (req, res) => {
  try {
    const { userId } = req.params;
    const allOwnItems = await db.user.findOne({
      where: {
        id: userId
      },
        include: [
          {
            model: db.item,
            include: db.offer,
          },
          {
            model: db.item,
            include: db.address,
          }
        ]
    });

    res.status = 200;
    res.send(allOwnItems);
    
  } catch (error) {
    console.log('Failed ', error);
  }
}


module.exports =  { getAllItems, getOwnItems };