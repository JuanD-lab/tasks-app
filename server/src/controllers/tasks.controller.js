const { Users, Tasks, UsersTasks, TasksStatuses, Status } = require("../models");

const listMyTasks = async (req, res) => {
  const userId = req.params.id
  const myTasks = await Users.findOne({where: { id: userId }, attributes: ["id"], include: [
    {
        model: Tasks,
        through: { attributes: [] },
        include: [{ model: Status, attributes: ['id', 'name'], through: { attributes: []} }]
    },
], })
  res.status(200).json(myTasks)
}

/**
 * It creates a new customer and then creates a new entry in the AgentsCustomers table with the user_id
 * and customer_id.
 * </code>
 * @param req - the request object
 * @param res - the response object
 * @returns {
 *     "ok": true,
 *     "message": "Created customer"
 * }
 */
const create = async (req, res) => {
  const { name } = req.body;
  const userId = req.params.id
  try {
    const newTask = await Tasks.create({ name });
    const newTaskId = newTask.id
    await UsersTasks.create({ user_id: userId, task_id: newTaskId })
    return res.status(201).json({ "ok": true, "message": "Created Task" });
  } catch (error) {
    console.log(error);
    return res.json({"message": "failed created task"})
  }
};

/// Set due for Task
const update = async (req, res) => {
  const { expiration } = req.body;
  const{ taskId } = req.params
  try {
    await Tasks.update({expiration}, {where: { id: taskId }});
    return res.status(200).json({ "ok": true, "message": "Updated Task expiration" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({"message": "failed to update task"})
  }
};

const setTaskStatus = async (req, res) => {
  const { statusId } = req.params;
  const{ taskId } = req.params
  const existingTaksStatusRelation = await TasksStatuses.findOne({where: {task_id: taskId}})
  if(existingTaksStatusRelation){
    const existingTaskId = existingTaksStatusRelation.id
    try {
      await TasksStatuses.update({status_id: statusId}, {where: {id: existingTaskId}})
      return res.status(200).json({ "ok": true, "message": "Updated Task status" });
    } catch (error) {
      console.log(error);
      return res.status(501).json({"message": "failed to update task expiration"})
    }
  }
  try {
    await TasksStatuses.create({status_id: statusId, task_id: taskId});
    return res.status(201).json({ "ok": true, "message": "Updated Task status" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({"message": "failed to update task expiration"})
  }
};






module.exports = { create, update, setTaskStatus, listMyTasks };
