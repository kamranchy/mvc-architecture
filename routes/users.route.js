const express = require("express");
const { getUsers, saveUser } = require("../controllers/users.controller");
const router  =  express.Router();

router.get("/users", getUsers); // here create a route

router.post("/users", saveUser);

module.exports = router;