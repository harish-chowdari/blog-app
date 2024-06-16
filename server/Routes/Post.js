const express = require("express");
const { getPosts, getPost, sendPost, deletePost, updatePost } = require("../Controller/Post");



const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", sendPost);

router.delete("/:id", deletePost);

router.put("/:id", updatePost);



module.exports = router
