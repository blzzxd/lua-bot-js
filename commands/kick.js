const {MessageEmbed} = require('discord.js');

const permissionEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

module.exports = {
    name: 'kick',
    description: 'kicks a member',
    execute(message, args) {
        if(!message.member.permissions.has('KICK_MEMBERS', false)) return message.reply({embeds: [permissionEmbed]});
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