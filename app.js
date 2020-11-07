const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => 
    res.send('hi world!')
)

app.listen(port, () => {
    console.log(`node_tests listening at ${port}`)
})