const express = require("express");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth//auth-router");
const wholesaleRouter = require("../data/wholesale-router")
const retailRouter = require("../data/retail-router")
const restricted = require("../auth/authenticator");



const server = express();
const cors = require("cors");
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/users", restricted, usersRouter);
server.use("/wholesale", restricted, wholesaleRouter)
server.use("/retail", restricted, retailRouter)
server.use("/auth", authRouter);


server.get("/", (req, res) => {
  res.json({ api: "I SHALL PASS" });
});



module.exports = server;