const express = require("express");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth//auth-router");
const dataRouter = require("../data/data-router")
const restricted = require("../auth/authenticator");

const server = express();
const cors = require("cors");
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/users", restricted, usersRouter);
server.use("/data", restricted, dataRouter)
server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "I SHALL PASS" });
});



module.exports = server;