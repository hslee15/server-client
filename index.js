const express = require("express")
const app = express()
const PORT = 3000
const bookRoutes=require('./routes/books')

app.use(express.json())
app.use("/books", bookRoutes)




app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.listen(PORT,()=>{
    console.log("Server is running")
})