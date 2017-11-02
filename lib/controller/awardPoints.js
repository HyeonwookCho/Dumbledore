
function awardPoints(originalMessage) {
  let points = originalMessage.text.split(' ')[0].replace(/[^\d.]/g, '');
const Parse = require('parse/node');
const { DB } = require('../word');

function awardPoints(botId, userId, point) {
  if (typeof botId === 'undefined' || typeof userId === 'undefined' || typeof point === 'undefined') return;
  const Contributor = new Parse.Object(DB.CONTRIBUTOR.CALL);
  const query = new Parse.Query(Contributor);
  query.equalTo(DB.CONTRIBUTOR.BOT_ID, botId).equalTo(DB.CONTRIBUTOR.USER_ID, userId).find({
    success(results) {
      if (results.length === 0) {
        Contributor.set(DB.CONTRIBUTOR.BOT_ID, botId);
        Contributor.set(DB.CONTRIBUTOR.USER_ID, userId);
        Contributor.set(DB.CONTRIBUTOR.POINT, point);

        Contributor.save();
      }
      results[0].increment(DB.CONTRIBUTOR.POINT, point);
      results[0].save();
    },
    error(error) {
      console.log(error.message);
    }
  });
}

module.exports = awardPoints;
