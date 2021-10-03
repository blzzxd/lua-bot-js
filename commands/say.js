const {MessageEmbed} = require('discord.js');

const permissionEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'say',
    description: 'bot says your message',
    execute(message, args) {
        if(!message.member.permissions.has('KICK_MEMBERS', false)) return message.reply({embeds: [permissionEmbed]});
        if(args.length === 0) return message.channel.send('Please provide text.');
        message.delete();
        var text = args.slice(0).join(" ");
        message.channel.send(text);
    }
};