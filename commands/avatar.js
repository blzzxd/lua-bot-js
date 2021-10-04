const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'sends your avatar',
    execute(message, args) {
        const emb = new MessageEmbed().setImage(message.author.avatarURL());
        message.channel.send({embeds: [emb]});
    }
};