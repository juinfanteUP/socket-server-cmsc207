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
  
  socket.on("join-room", ({ username, room }) => {
    console.log(`[join-room event] [username: ${username}] [room: ${room}] [socket_id:] ${socket.id}`);
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);
  });

  socket.on("send-message", message => {
    const user = getCurrentUser(socket.id);
    console.log(`[send-message event] [message: ${message}] from user: ${user.username}`);
    socket.to(user.room).emit("message", formatMessage(user.username, message));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );
    }
  });
});

const PORT = process.env.PORT || 5000;

//Run server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
