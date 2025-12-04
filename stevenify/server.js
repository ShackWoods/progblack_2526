const express = require('express')
const app = express()

let songs = [ 'mr cellophane', 'john ball', 'jack frost', 'hold me now', 'only you'];


app.use(express.static('client'));


app.get('/song/list', function (req, resp){
    resp.send(songs);
});

app.post('/song/new', function(req, resp){
  resp.send("Thank you for you interest in stevenify. Your request has not been put into a queue")
})

app.listen(8090)
