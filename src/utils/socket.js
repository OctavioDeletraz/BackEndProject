import { Server } from 'socket.io';
import * as messagesApi from '../api/messages.api.js'


export default function startSocketServer(httpServer) {
    const io = new Server(httpServer);

    io.on('connection', async (socket) => {
        console.log('New user connected. Socket ID: ', socket.id);
        socket.emit('messages', await messagesApi.get());
        socket.on('update-message', async (username,message) => {
            await messagesApi.create(username,message);
            io.sockets.emit('messages', await messagesApi.get());
        });
        socket.on('disconnect', () => {
            console.log('User was disconnected');
        });
    });
    return io;
}