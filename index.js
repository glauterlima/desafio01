const express = require("express");

const server = express();

server.get("/projects", (req, res) => {
  return res.send("Projetos");
});

server.listen(3000);
