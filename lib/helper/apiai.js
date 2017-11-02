const apiai = require('apiai');
// var apiai = require('apiai');
//
// var app = apiai("8fb7f9f2763e4b879d0bfbbe9aedbff8");
//
// var request = app.textRequest('weather forecast in San Francisco tommorow', {
//    sessionId: '831d929a-fbb2-4ea0-a248-e8988faa2c84'
// });
//
// request.on('response', function(response) {
//    console.log(response);
//    console.log(response.result.fulfillment.speech);
//    console.log(response.result.resolvedQuery);
// });
//
// request.on('error', function(error) {
//    console.log(error);
// });
//
// request.end();

class APIAI {
  constructor(token, sessionId) {
    if (!token || !sessionId) {
      throw Error('please set client-access-token');
    }
    this.ai = apiai(token);
    this.sessionIdOpt = { sessionId };
  }

  postRequest(textMessage) {
    console.log('param_textmessage : ' + textMessage);
    console.log('this.sessionIdOpt : ' + this.sessionIdOpt);
    const request = this.ai.textRequest(textMessage, this.sessionIdOpt);
    // sessionId: '831d929a-fbb2-4ea0-a248-e8988faa2c84'

    request.on('response', function (response) {
      console.log('apiai response ' + response.result.metadata.intentName);
      console.log(response.result.fulfillment.speech);
      console.log(response.result.resolvedQuery);
    });

    request.on('error', function (error) {
      console.log('apiai error' + error);
      console.log('apiai error' + typeof error);
    });

    request.end();
  }
}

module.exports = APIAI;
