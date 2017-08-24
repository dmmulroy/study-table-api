const jwt = require("jsonwebtoken");

const config = require("../../config");

module.exports = (req, res, next) => {
  try {
    const [_, token] = req.get("Authorization").split(" ");
    if (!token) return res.status(401).end();

    const decodedToken = jwt.verify(token, config.JWT_SECRET, {
      issuer: config.JWT_ISSUER
    });

    if (!decodedToken) {
      return res.status(403).end();
    }

    req.decodedToken = decodedToken;

    return next();
  } catch (err) {
    console.error(err);
    return res.status(401).end();
  }
};
