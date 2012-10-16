module.exports = function date (room, log) {
  room.on('command', function (message) {
    if (message.indexOf('date') != -1) {
      room.say(new Date());
      log('You asked for the time and I told you');
    }
  });
};
