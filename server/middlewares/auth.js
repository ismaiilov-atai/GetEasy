const db = require('../model/index');

const authMiddleware = async (req, res, next) => {  
  try {
    const { uid } = req.session;
    const user = await db.user.findOne({ id : uid });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;