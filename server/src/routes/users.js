const { Router } = require('express');
const router = new Router();
const usersController = require("../controllers/users");

// GET Requests
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);

module.exports = router;
