const express = require('express')
const bodyParser = require('body-parser');
const phones = require( './phone-db' );
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 5000
const db = phones.start();

app.get('/', (req, res) => {
    let phoneList = db.getAllPhones2();
    console.log(phoneList);
    res.json(phoneList);

})

app.get('/express', (req, res) => {
  let phoneList =  db.getAllPhones();
  console.log(phoneList);
  res.set('Content-Type', 'application/json').json(phoneList);

})

app.get('/:id', (req, res) => {

console.log(db.getPhone(parseInt(req.params.id)));

res.json(db.getPhone(parseInt(req.params.id)));

})


app.post('/id', (req, res) => {

  console.log(req.body);
  const result = db.addPhone(req.body);
  res.send({"phoneId": result});
 })


app.delete('/:id', (req, res) => {

    if(db.deletePhone(req.params.id)){  
      res.send('ok');
    } else{
      res.status(500).send(("phone object not found:" + req.body))
    }
 })

  app.put('/:id', (req, res) => {

    console.log(req.body);
    if(db.updatePhone(req.body)){
      res.send('ok');
    } else{
      res.status(500).send(("phone object not found:" + req.body))
    }  
  })


app.listen(port, () => {
  console.log(`cbphones app server listening at http://localhost:${port}`)
})