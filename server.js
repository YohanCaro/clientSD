const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const list = [{ id: 0, name: "Juan", type: "cedula", document: "3462351", profession: "ingeniero", brithday: "10-12-98" }]

app.use(cors())
app.use(express.json())

app.get('/person', (req, res) => {
    console.log(JSON.stringify(list))
    res.send('{"list":' + JSON.stringify(list) + '}')
        //res.send('{"list":[{ "id": 0, "name": "Juan", "document": "3462351", "profession": "ingeniero", "brithday": "10-12-98" }]}')
})

app.post('/person/add', (req, res) => {
    console.log('Rec ' + req.body.name)
    var a = [{ id: list.length, name: req.body.name, type: "cedula", document: req.body.doc, profession: req.body.pro, brithday: "10-12-98" }]
    list.push(a)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})