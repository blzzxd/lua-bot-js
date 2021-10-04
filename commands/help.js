const {MessageEmbed} = require('discord.js');
const config = require('../config.json')
const PREFIX = config.prefix;

module.exports = {
    name: 'help',
    description: 'provides help',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor('#12cf93')
            .setTitle('List of commads:')
            .addFields(
                { name: 'Get help', value: `${PREFIX}help` },
                { name: 'Ping bot', value: `${PREFIX}ping` },
                { name: 'Get current server info', value: `${PREFIX}info`},
                { name: 'Kicking user', value: `${PREFIX}kick <user>`},
                { name: 'Banning user', value: `${PREFIX}ban <user>`},
                { name: 'Cleans the chat', value: `${PREFIX}clear <message count>`},
                { name: 'Bot says your message in the chat', value: `${PREFIX}say <message>`},
                { name: 'Get your avatar image', value: `${PREFIX}avatar`}
            )
        message.reply({ embeds: [embed] });
    }
};