let express = require('express');
let socket = require('socket.io');

/* app setup */

let app = express();

/*server setup */

let server = app.listen(4000, () => {
    console.log("Project is just run on port 4000.")
})

/* route setup */

app.get('/', (res,req) => {
    req.sendFile(__dirname+'/public/index.html')
})

let io = socket(server);
io.on('connection', (socket) => {
    socket.on('chat', (data) => {
        console.log(data);
    });
});