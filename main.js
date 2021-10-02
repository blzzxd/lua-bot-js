/*  Lua Bot                                     */
/*  Author - Artur Asimov                       */
/*  Github - https://github.com/artur-asimov/lua-bot-js    */

const config = require('./config.json')
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents:  [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const PREFIX = config.prefix;


// "You don't have permission to do that"
const permissionEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Oops!')
    .setDescription(`You don't have permission to use this command!`);

// When bot is ready
client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`);
});

// When someone sends a message
client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(PREFIX)) console.log(`[${message.guild.name}:${message.channel.name}] -> [${message.author.tag}]: ${message.content}`);
    if(message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        console.log(`[${message.guild.name}:${message.channel.name}] -> [${message.author.tag}]: used command - '${CMD_NAME}' with arguments '${args}'`);

        // commands
        if(CMD_NAME === 'ping')
            message.reply('Pong!');
        else if(CMD_NAME === 'info') {
            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Server Information')
                .addFields(
                    { name: 'Server name', value: `${message.guild.name}` },
                    { name: 'Member count', value: `${message.guild.memberCount}` }
                )
            message.reply({ embeds: [embed] });
        } else if(CMD_NAME === 'kick') {
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
        } else if(CMD_NAME === 'ban') {
            if(!message.member.permissions.has('BAN_MEMBERS', false)) return message.reply({embeds: [permissionEmbed]});
            if(args.length === 0) return message.reply('Please provide user to ban.');
            var victim = message.mentions.members.first();
            if(victim) {
                victim.ban()
                    .then((victim) => message.channel.send(`${victim} was banned from the server.\nReason - ${args[1]}`))
                    .catch(() => message.reply('I can\'t ban that user!'));
                victim.send(`You has been **banned** from the ${message.guild.name}!\nReason - ${args[1]}`).catch(() => null);
            }
            else
                message.reply('Undefined user!');
        } else if(CMD_NAME === 'clear') {
            if(!message.member.permissions.has('KICK_MEMBERS', false)) return message.reply({embeds: [permissionEmbed]});
            if(args.length === 0) return message.channel.send('Please provide a message count to delete.');
                message.channel.bulkDelete(parseInt(args[0])+1).catch(() => null);
        } else if(CMD_NAME === 'help') { 
            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Bot help')
                .addFields(
                    { name: 'Get help', value: `${PREFIX}help` },
                    { name: 'Ping bot', value: `${PREFIX}ping` },
                    { name: 'Get current server info', value: `${PREFIX}info`},
                    { name: 'Kicking user', value: `${PREFIX}kick <user>`},
                    { name: 'Banning user', value: `${PREFIX}ban <user>`},
                    { name: 'Cleans the chat', value: `${PREFIX}clear <message count>`}
                )
            message.reply({ embeds: [embed] });
        } else if(CMD_NAME === 'bebra') {
            message.delete();
            message.channel.send('https://tenor.com/view/%D0%B1%D0%B5%D0%B1%D1%80%D0%B0-bebra-gif-22576166');
        } else {
            const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Unknown command')
            .setDescription(`Enter ${PREFIX}help to get list of commands!`)
            message.reply({ embeds: [embed] });
        }
    }
});

// When someone deletes message
client.on('messageDelete', (message) => {
    console.log(`[${message.author.tag}]: deleted - ${message.content}`);
});

// When someone joins the server
client.on('guildMemberAdd', member => {
    member.send(`Hello, user! Welcome to the **${member.guild.name}**!\nPlease read the server rules, if any, so as not to receive punishments in the future.`)
    .catch(() => null);
});

client.login(config.token);
