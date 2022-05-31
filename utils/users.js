const users = new Object();

// Join user to chat
function userJoin(id, clientId, room) {
  const user = { id, clientId, room };
  
  console.log(`[userJoin fn] id: ${id} clientId: ${clientId} room: ${room}`)
  console.log(user);
  
  users[id] = user;

  return user;
}

// Get current user
function getCurrentUser(id) {
  console.log(`[getCurrentUser fn] getting user with id: ${id}`)
  return users[id];
}

// User leaves chat
function userLeave(id) {
  console.log(`[userLeave fn] user with id: ${id} is leaving`)
  users[id] = null;
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
};
