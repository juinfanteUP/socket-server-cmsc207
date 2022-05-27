const moment = require('moment');

function formatMessage( body, isWhisper, isAgent, senderId, clientId) {
  return {
    body,
    isWhisper,
    isAgent,
    senderId,
    clientId,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
