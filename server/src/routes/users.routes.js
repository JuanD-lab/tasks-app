const { Router } = require("express");
const route = Router();
const { login, registerUser, verifyUser } = require("../controllers/users.controller");

route.post("/login", login);
route.post("/users", registerUser);
route.get("/users/verify", verifyUser);

module.exports = route;
