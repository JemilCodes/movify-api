const express = require("express");
const router = express.Router();

const { search, getSingle } = require("../controller");
router.route("/search").post(search);
router.route("/getSingle").post(getSingle);

module.exports = router;
