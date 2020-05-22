const express = require('express');
const cors = require('cors');
require('./server/config/mongoose.config');
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );
const io = require("socket.io")(server);

io.on("connection", socket => {
    io.emit("Welcome to the server!", 'Hello!');
    socket.on("Pinging Peeps", data=>{
        socket.broadcast.emit("Pinged", data)
    })
});