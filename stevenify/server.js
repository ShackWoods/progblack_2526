const express = require('express')
const app = express()

let songs = [ 'mr cellophane', 'john ball', 'jack frost', 'hold me now'];


app.use(express.static('client'));

app.get('/random/:max', function(req, resp){
  max = parseInt(req.params.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.get('/r', function(req, resp){
  max = parseInt(req.query.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via query is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

app.get('/list', function (req, resp){
    resp.send(songs);
});

app.listen(8090)
