const express = require('express')

const app = express()


app.get("/", (req, res) => {
    res.send("app")
})


app.listen(8000, ()=>{
     console.log('listening on http://localhost:8000')
})