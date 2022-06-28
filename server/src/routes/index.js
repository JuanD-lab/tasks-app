const { Router } = require("express");
const routes = Router();

const tasksRoutes = require("./tasks.routes")
const userRoutes = require("./users.routes")

routes.use(tasksRoutes, userRoutes)

module.exports = routes;