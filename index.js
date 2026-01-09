import express from 'express'


const app  = express()


app.get("/", (req, res) => {
    res.status(200).json({
        message : "We are good with test api"
    })
})

app.listen(5000, () => {console.log(`Server is running on PORT 5000`)})