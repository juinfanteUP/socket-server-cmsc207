const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {cors: {origin: "*"}});
const botName = "Chat Bot";

// Run when a client connects
io.on("connection", (socket) => {

  console.log("New Web Socket connection");
  

  // User joined chat room
  socket.on("join-room", ({ clientId, room }) => {
    console.log(`[join-room event] [clientId: ${clientId}] [room: ${room}] [socket_id:] ${socket.id}`);
    const user = userJoin(socket.id, clientId, room);
    socket.join(user.room);
    if (clientId == room) {
      console.log(`client joining: ${clientId}`)
      socket.broadcast.emit("client-join-room", clientId);
    }
  });


  // Send message trigger
  socket.on("send-message", message => {
    const user = getCurrentUser(socket.id);
    console.log(user);
    console.log(`[send-message event] [message: ${message.body}] from user: ${message.clientId}`);
    socket.to(user.room).emit("message", formatMessage(message.body, message.isWhisper, message.isAgent, message.senderId, message.clientId));
  });


  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.clientId} has left the chat`)
      );
    }
  });
});

const PORT = process.env.PORT || 5000;

//Run server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
