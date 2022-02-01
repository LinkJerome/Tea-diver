const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const PORT = process.env.PORT || 3000;

const app = express().use(express.static(DIST_DIR));

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log(`Client disconnected`);
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port: ${PORT}`);
});
