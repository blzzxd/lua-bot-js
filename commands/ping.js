module.exports = {
    name: 'ping',
    description: 'pings a bot',
    execute(message, args) {
        message.reply('Pong!');
    }
};