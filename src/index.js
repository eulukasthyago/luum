import express from 'express';
import http from 'http';

import socketio from 'socket.io';

const app = express();
const server = http.Server(app);

app.use(express.static(__dirname + '/public'))

const io = socketio(server);

io.on('connect', (socket) => {
  socket.on('teste', (res) => {
    console.log(res);
  });
});

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/teste', (req, res) => {
  res.send('Aula de express');
});

server.listen(3333, () => {
  console.log('Servidor iniciado porta', 3333);
});