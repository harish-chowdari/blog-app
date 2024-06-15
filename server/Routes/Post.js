const express = require("express");
const { getPosts } = require("../Controller/Post");



const router = express.Router();

router.get("/", getPosts);


module.exports = router
