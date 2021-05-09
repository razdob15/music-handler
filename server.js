console.log('Server-side code running');

let AVReceiver = require('marantz-avr');
let receiver = new AVReceiver('10.100.102.5');

const express = require('express');
const bp = require('body-parser')
const app = express();

// serve files from the public directory
app.use(express.static('public'));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// start the express web server listening on 8080

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Set volume
app.post('/setvolume', (req, res) => {
  console.log('Volume is:', req.body.volume);  
  receiver.setVolumeLevel(req.body.volume).then(
    res => console.log(res),
    error => console.log(error)    
);
res.sendStatus(200);

  
});

app.listen(8080, () => {
  console.log('listening on 8080');
});