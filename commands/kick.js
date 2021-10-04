const {MessageEmbed} = require('discord.js');
const config = require('../config.json');
const AdminRole = config['admin-role-id'];

const permissionEmbed = new MessageEmbed()
    .setColor('#12cf93')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'kick',
    description: 'kicks a member',
    execute(message, args) {
        if(!message.member.roles.cache.some(r => r.id === AdminRole)) return message.reply({embeds: [permissionEmbed]});
            if(args.length === 0) return message.reply('Please provide user to kick.');
            var victim = message.mentions.members.first();
            if(victim) {
                victim.kick()
                    .then((victim) => message.channel.send(`${victim} was kicked from the server.\nReason - ${args[1]}`))
                    .catch(() => message.reply('I can\'t kick that user!'));
                victim.send(`You has been **kicked** from ${message.guild.name}!\nReason - ${args[1]}`).catch(() => null);
            }
            else
                message.reply('Undefined user!');
    }
};