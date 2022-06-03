const moment = require('moment');

function formatMessage( body, isWhisper, isAgent, senderId, clientId, attachmentId, fileName, fileSize) {
  return {
    body,
    isWhisper,
    isAgent,
    senderId,
    clientId,
    attachmentId,
    fileName,
    fileSize,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
