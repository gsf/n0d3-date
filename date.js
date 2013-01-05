module.exports = function date (client) {
  client.on('.date', function (command) {
    var date = new Date();
    switch (command.text) {
      case 'iso':
        command.reply(date.toISOString());
        break;
      case 'date':
        command.reply(date.toDateString());
        break;
      case 'time':
        command.reply(date.toTimeString());
        break;
      default:
        command.reply(date);
    }
  });
};
