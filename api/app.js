const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())







app.get('/', (req,res)=>{
  res.json({message:"Hello World with Docker!"})
});




const port = process.env.PORT || 4000;
app.listen(port, ()=>{
  console.log(`Express app is listening on http://localhost:${port}`)
})