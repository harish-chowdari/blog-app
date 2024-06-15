const Db = require("../Db")
const bcrypt = require("bcryptjs")



const Register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ? ";
  Db.query(q, [req.body.email, req.body.name], (err, data)=> {
    if(err)
        {
            return res.json(err)
        }
    if(data.length)
        {
            return res.status(409).json("user exist already")
        }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const q = "insert into users(`username`, `email`, `password`) values (?)"

    const values = [
        req.body.username,
        req.body.email,
        hash
    ]

    Db.query(q, [values], (err, data)=> {
        if(err)
            {
                return res.json(err)
            }

        return res.json("user has been created")
    })

  })
};






const Login = (req, res) => {

    const q = "SELECT * FROM users WHERE username = ?";

  Db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    

    res.status(200).json("login success");
  });



};




const Logout = (req, res) => {};

module.exports = {
  Register,
  Login,
  Logout,
};
