const db = require('../model/index');

const insertUser = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    const insertedUser = await db.user.create({name, email, password});
    res.status = 201;
    res.send(insertedUser);
  } catch (error) {
    console.log('Failed ', error)
  }

}

module.exports = insertUser;