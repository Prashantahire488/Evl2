const express = require("express");
const connect = require("./configs/db");
const app = express();

const userController = require("./controllers/user.controller");
const movieController = require("./controllers/movie.controller");
const screenController = require("./controllers/screen.controller");
const theatreController = require("./controllers/theatre.controller");
const showController = require("./controllers/show.controller");

app.use("/user", userController);
app.use("/movie", movieController);
app.use("/screen", screenController);
app.use("/theatre", theatreController);
app.use("/show", showController);

const start = async () => 
{
  await connect();

  app.listen(3000, () => {
    console.log("Lisning to port 3000");
  });
};

module.exports = start;