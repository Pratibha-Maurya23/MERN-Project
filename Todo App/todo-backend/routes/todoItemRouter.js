// External Module
const express = require("express");
const todoItemRouter = express.Router();

const todoItemController = require("../controller/todoItemController");

todoItemRouter.get("/",todoItemController.getTodoItem);
todoItemRouter.post("/",todoItemController.createTodoItem);
todoItemRouter.delete("/:id",todoItemController.deleteTodoItem);
todoItemRouter.put("/:id/completed",todoItemController.markCompleted);

module.exports = todoItemRouter;