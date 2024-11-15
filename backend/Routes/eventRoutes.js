const express = require("express");


const { protect } = require("../middleware/authMiddleware");
const {fetchAllEventsContoller} = require("../Controllers/eventController")
const Router = express.Router();

Router.get('/fetchEvents',protect,fetchAllEventsContoller);


module.exports = Router;