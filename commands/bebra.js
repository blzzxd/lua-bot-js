module.exports = {
    name: 'bebra',
    description: 'sends bebra gif',
    execute(message, args) {
        message.delete();
        message.channel.send('https://tenor.com/view/%D0%B1%D0%B5%D0%B1%D1%80%D0%B0-bebra-gif-22576166');
    }
};