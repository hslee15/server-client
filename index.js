const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

const characterRouter = require('./routes/character')
app.use('/char',characterRouter)


app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.listen(PORT,()=>{
    console.log("Server is running")
})