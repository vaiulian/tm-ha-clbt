var express = require('express');
var bodyParser = require('body-parser');
var phones = require('./phone-db');
var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var port = 5000;
var db = phones.start();
app.get('/', function (req, res) {
    var phoneList = db.getAllPhones2();
    console.log(phoneList);
    res.json(phoneList);
});
app.get('/express', function (req, res) {
    var phoneList = db.getAllPhones();
    console.log(phoneList);
    res.set('Content-Type', 'application/json').json(phoneList);
});
app.get('/:id', function (req, res) {
    console.log(db.getPhone(parseInt(req.params.id)));
    res.json(db.getPhone(parseInt(req.params.id)));
});
app.post('/id', function (req, res) {
    console.log(req.body);
    var result = db.addPhone(req.body);
    res.send({ "phoneId": result });
});
app["delete"]('/:id', function (req, res) {
    if (db.deletePhone(req.params.id)) {
        res.send('ok');
    }
    else {
        res.status(500).send(("phone object not found:" + req.body));
    }
});
app.put('/:id', function (req, res) {
    console.log(req.body);
    if (db.updatePhone(req.body)) {
        res.send('ok');
    }
    else {
        res.status(500).send(("phone object not found:" + req.body));
    }
});
app.listen(port, function () {
    console.log("cbphones app server listening at http://localhost:" + port);
});
