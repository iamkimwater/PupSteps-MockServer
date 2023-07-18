const {Server} = require('socket.io');

module.exports = (server, app) => {
    const io = new Server(server, {
        path: process.env.NODE_ENV === 'socket.io',
    });
    app.set('io', io);

    io.of('chatting')
        .on('connection', (socket) => {
            try {
                console.log("접속 되었습니다");
                // 1. 이벤트를 받는다
                socket.on('join-room', (data) => {
                    const {userId} = data;
                    socket.join(userId);
                    console.log(`유저${userId}: 자신의 채팅방에 입장했습니다`);
                });
                socket.on('send-chat', (data) => {
                    const {chat} = data;
                    console.log(`[유저${chat.sender.id} ${chat.sender.userName} >>> 유저${chat.receiver.id} ${chat.receiver.userName}] 새로운 메시지 "${chat.message}" 보냄`);
                    socket.to(chat.receiver.id).emit('new-chat-created', {chat});
                })
                socket.on('disconnect', () => {
                    console.log("접속이 끊어졌습니다");
                    // socket.leave(userId);
                });
            } catch (e) {
                console.error(e);
            }
        });
};