const users = [];

// Join user to chat
function userJoin(id, username, room) {
  const user = { id, username, room };
  
  console.log(`[userJoin fn] id: ${id} username: ${username} room: ${room}`)

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  console.log(`[getCurrentUser fn] getting user with id: ${id}`)
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  console.log(`[userLeave fn] user with id: ${id} is leaving`)
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  console.log(`[getRoomUsers fn] get users in room: ${room}`);
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
