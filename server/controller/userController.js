const db = require('../model/index');
const bcrypt = require('bcrypt');

const insertUser = async (req, res) => {
  const {name, email, password} = req.body;
  const user = await db.user.findOne({ where: { email } });
  if (user) {
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  }
  try {
    if (password === '') {
      res
      .status(401)
      .send({ error: '401', message: 'Bad credentials' });
    }
    const hashedPassword =  await bcrypt.hash(password, 10);
    const insertedUser = await db.user.create({name, email, password: hashedPassword});
    const { id } = insertedUser;
    req.session.uid = id;
    res.status(201);
    res.send(insertedUser);

  } catch (error) {
    console.log('Failed ', error);
  }

}

module.exports = insertUser;