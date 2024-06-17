const Db = require("../Db");
const jwt = require("jsonwebtoken");



async function getPosts(req, res) {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";
  Db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
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
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Authenticated!");

  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");
  

  const q = "INSERT INTO posts (`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?) "

  const values = [ 
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.cat,
    req.body.date,
    userInfo.id
  ]

  Db.query(q, [values], (err, data)=>{
    if(err) return res.json(err)

      return res.json("post has been created")

  })

}); 

}




async function deletePost(req, res) {

  const token = req.cookies.accessToken;
  
  if (!token) return res.status(401).json("Not Authenticated!"); 

  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid."); 

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"; 

    Db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err); 

      if (data.affectedRows === 0) {
        return res.status(403).json("You can delete only your posts!"); 
      }

      return res.status(200).json("Post has been deleted"); 
    });
  });
}




async function updatePost(req, res) {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Authenticated!");

  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");
  

  const postId = req.params.id

  const q = "UPDATE posts SET `title`= ?, `desc` = ?, `img` = ?, `cat` = ? WHERE `id` = ? AND `uid` = ? "

  const values = [ 
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.cat 
  ]

  Db.query(q, [...values, postId, userInfo.id], (err, data)=>{
    if(err) return res.json(err)

      return res.json("post has been created")

  })

});
}




module.exports = {
  getPosts,
  getPost,
  sendPost,
  deletePost,
  updatePost,
};
