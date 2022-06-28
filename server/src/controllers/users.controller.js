const { Users, AgentsCustomers } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createToken = require("../middlewares/createToken.middleware");

const verifyUser = async (req, res) => {
  const token = req.headers.authorization || req.headers.Authorization;
  if (!token) return res.status(401).json({ ok: false, message: "No token provided" });
  try {
    const getVerifyToken = jwt.verify(token, process.env.JWT_KEY);
    if (!getVerifyToken) return res.status(401).json({ ok: false, message: "No token provided" });
    const user = await Users.findAll({ where: { id: getVerifyToken.id }, attributes: ["id"] })
    if (!user) return res.status(401).json({ ok: false, message: "Invalid Token" });
    return res.json({ ok: true, message: "authenticaded" });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  await Users.create({ first_name, last_name, password: hash, email: email, rol: "agent" });
  return res.status(201).json({ ok: true, message: "Created user" });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (email) {
    try {
      const user = await Users.findOne({
        where: { email: email },
      });
      if (!user)
        return res.status(401).json({
          ok: false,
          message: "Unauthorized user",
        });
      if (user) {
        const userPass = user.password;
        const validPass = await bcrypt.compare(password, userPass);
        if (validPass) {
          const { id } = user;
          const token = createToken({ id, email });
          return res.json({ token: token, id: id });
        }
        return res.status(401).json({
          ok: false,
          message: "Invalid credentials",
        })
      }
    } catch (error) {
      next(error);
    }
  }
};


module.exports = { verifyUser, registerUser, login };
