const {MessageEmbed} = require('discord.js');
const config = require('../config.json');
const ROLE = config['mute-role-id'];
const AdminRole = config['admin-role-id'];

const permissionEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'mute',
    description: 'mute a member',
    execute(message, args) {
        if(!message.member.roles.cache.some(r => r.id === AdminRole)) return message.reply({embeds: [permissionEmbed]});
            if(args.length === 0) return message.reply('Please provide user to mute.');
            var victim = message.mentions.members.first();
            if(victim) {
                victim.roles.add(ROLE)
                    .then((victim) => message.channel.send(`${victim} was muted in this server.\nReason - ${args[1]}`))
                    .catch(() => message.reply('I can\'t mute this user!'));
                victim.send(`You has been **muted** in ${message.guild.name}!\nReason - ${args[1]}`).catch(() => null);
            }
            else
                message.reply('Undefined user!');
    }
};