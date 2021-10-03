/*  Lua Bot                                                 */
/*  Author - Artur Asimov                                   */
/*  Github - https://github.com/artur-asimov/lua-bot-js     */

const { Client, Intents, MessageEmbed, Collection, CommandInteraction } = require('discord.js');
const client = new Client({ intents:  [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

const fs = require('fs');
const config = require('./config.json')
const PREFIX = config.prefix;

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


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

        // Commands
        // command code you can get in commands/ folder
        if(CMD_NAME === 'ping')
            client.commands.get('ping').execute(message, args);
        else if(CMD_NAME === 'info')
            client.commands.get('info').execute(message, args);
        else if(CMD_NAME === 'kick')
            client.commands.get('kick').execute(message, args);
        else if(CMD_NAME === 'ban')
            client.commands.get('ban').execute(message, args);
        else if(CMD_NAME === 'clear')
            client.commands.get('clear').execute(message, args);
        else if(CMD_NAME === 'say')
            client.commands.get('say').execute(message, args);
        else if(CMD_NAME === 'help')
            client.commands.get('help').execute(message, args);
        else if(CMD_NAME === 'bebra')
            client.commands.get('bebra').execute(message, args);
        else
            client.commands.get('unknown').execute(message, args);
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
