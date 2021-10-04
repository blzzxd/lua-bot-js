const {MessageEmbed} = require('discord.js');
const config = require('../config.json')
const PREFIX = config.prefix;

module.exports = {
    name: 'unknown',
    description: 'what is that command?',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor('#12cf93')
            .setTitle('Unknown command')
            .setDescription(`Enter ${PREFIX}help to get list of commands!`)
        message.reply({ embeds: [embed] });
    }
};