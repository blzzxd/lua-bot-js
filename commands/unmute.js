const {MessageEmbed} = require('discord.js');
const config = require('../config.json');
const ROLE = config['mute-role-id'];
const AdminRole = config['admin-role-id'];

const permissionEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'unmute',
    description: 'unmute a member',
    execute(message, args) {
        if(!message.member.roles.cache.some(r => r.id === AdminRole)) return message.reply({embeds: [permissionEmbed]});
            if(args.length === 0) return message.reply('Please provide user to unmute.');
            message.delete();
            var victim = message.mentions.members.first();
            if(victim) {
                victim.roles.remove(ROLE)
                    .catch(() => message.reply('I can\'t unmute this user!'));
                victim.send(`You has been unmuted in ${message.guild.name}.`).catch(() => null);
            }
            else
                message.reply('Undefined user!');
    }
};