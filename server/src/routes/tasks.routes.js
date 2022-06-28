const { Router } = require("express");
const route = Router();
const { create, update, setTaskStatus, listMyTasks } = require("../controllers/tasks.controller");
const { verifyToken } = require("../middlewares/auth.middleware")

route.post("/users/:id/tasks/", verifyToken, create);
route.put("/users/:id/tasks/:taskId", verifyToken, update);
route.post("/users/:id/tasks/:taskId/status/:statusId", verifyToken, setTaskStatus);
route.get("/users/:id/tasks/", verifyToken, listMyTasks);


module.exports = route;
