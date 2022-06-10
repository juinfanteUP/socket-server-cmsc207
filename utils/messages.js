const moment = require('moment');

function formatMessage( body, isWhisper, isAgent, senderId, clientId, attachmentId, fileName, fileSize, conversationId) {
  return {
    body,
    isWhisper,
    isAgent,
    senderId,
    clientId,
    attachmentId,
    fileName,
    fileSize,
    conversationId,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
