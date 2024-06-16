const Db = require("../Db");


async function getPosts(req, res) {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";
  Db.query(q, [req.query.cat], (err, data)=> {
    if(err) return res.json(err)
        return res.json(data)
  })
}
 
async function getPost(req, res) {
    const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  Db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
}

async function sendPost(req, res) {
  res.send("hi");
}

async function deletePost(req, res) {
  res.send("hi");
}

async function updatePost(req, res) {
  res.send("hi");
}

module.exports = {
  getPosts,
  getPost,
  sendPost,
  deletePost,
  updatePost,
};
