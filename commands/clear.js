const {MessageEmbed} = require('discord.js');

const permissionEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'clear',
    description: 'do cleaning in the chat',
    execute(message, args) {
        if(!message.member.permissions.has('KICK_MEMBERS', false)) return message.reply({embeds: [permissionEmbed]});
        if(args.length === 0) return message.channel.send('Please provide a message count to delete.');
        message.channel.bulkDelete(parseInt(args[0])+1).catch(() => null);
    }
};