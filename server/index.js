const express  = require("express")
const PostRoutes = require("./Routes/Post")
const UserRoutes = require("./Routes/User")
const AuthRoutes = require("./Routes/Auth")
const cors = require("cors")
const cookie= require("cookie-parser")
const multer  = require('multer')



const app = express()
app.use(cors())
app.use(express.json())
app.use(cookie())





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage })



  app.post('/api/upload', upload.single('file'), function (req, res, next) {
    if (!req.file) {
        console.log("no file selected!")
        return res.status(400).json({ error: 'No file uploaded' });
      }
      return res.json({ filename: req.file.filename });
  })



app.use("/api/posts", PostRoutes) 
app.use("/api/users", UserRoutes)   
app.use("/api/auth", AuthRoutes) 







app.listen(8800, ()=>{
    console.log("server running...")
}) 