const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ "ok": false, "message": "Token inválido" });
      } else {
        console.log(decoded);
        req.rol = decoded.rol
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({
      "message": "Token no proporcionado.",
    });
  }
};

module.exports = { verifyToken };
