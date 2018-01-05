'use strict'
import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';



const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

    console.log(`Cone : ${ws}`);
    ws.on('message', (message: string) => {

        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    ws.on('error',err =>{
        console.log('errrr');
        console.log(err);
    })

    ws.on('close',close =>{
        console.log('close');
        console.log(close);
    })

    ws.send('I am a WebSocket server');
});

server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});