const express  = require("express")
const PostRoutes = require("./Routes/Post")
const UserRoutes = require("./Routes/User")
const AuthRoutes = require("./Routes/Auth")
const cors = require("cors")
const cookie= require("cookie-parser")


const app = express()
app.use(cors())
app.use(express.json())
app.use(cookie())


app.use("/api/posts", PostRoutes)
app.use("/api/users", UserRoutes)   
app.use("/api/auth", AuthRoutes) 




app.listen(8800, ()=>{
    console.log("server running...")
}) 