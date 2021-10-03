const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'info',
    description: 'get a server information',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Server Information')
            .addFields(
                { name: 'Server name', value: `${message.guild.name}` },
                { name: 'Member count', value: `${message.guild.memberCount}` }
            )
        message.reply({ embeds: [embed] });
    }
};