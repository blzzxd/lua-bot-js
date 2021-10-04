const {MessageEmbed} = require('discord.js');
const config = require('../config.json');
const AdminRole = config['admin-role-id'];

const permissionEmbed = new MessageEmbed()
    .setColor('#12cf93')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'say',
    description: 'bot says your message',
    execute(message, args) {
        if(!message.member.roles.cache.some(r => r.id === AdminRole)) return message.reply({embeds: [permissionEmbed]});
        if(args.length === 0) return message.channel.send('Please provide text.');
        message.delete();
        var text = args.slice(0).join(" ");
        message.channel.send(text);
    }
};