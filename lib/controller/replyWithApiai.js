function replyWithApiai(apiai, originalMessage) {
  console.log('originalMessage : ' + originalMessage.text);
  apiai.postRequest(originalMessage.text.toLowerCase());
}

module.exports = replyWithApiai;
