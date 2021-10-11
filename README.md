# Lua Bot
Lua bot is an Discord.js bot. On this moment he can do moderation stuff like kick/mute/ban users.
![](https://github.com/artur-asimov/lua-bot-js/blob/main/luabotlogo.png?raw=true)

## Installation

```bash
git clone https://github.com/artur-asimov/lua-bot-js.git
```

## Set it up
Go to the `lua-bot-js/config.json` and fill in the config.

`token` is where your bot token stored in.
`prefix` is your command prefix.
`mute-role-id` is server mute role id. When you mute user, bot gives mute role.
`admin-role-id` is your admin role. Members with admin role can use moderation commands.
`welcome-channel-id` is channel id where bots sends welcome messages, when users joins in.

```json

{
    "token": "your-token-here",
    "prefix": "!",
    "mute-role-id": "your-mute-role-here",
    "admin-role-id": "your-admin-role-here",
    "welcome-channel-id": "your-welcome-channel-id"
}
```

## Run
In the `lua-bot-js/` directory run:
```bash
npm run dev
```
## Discord channel
Join also our discord channel where we test our bot!
https://discord.gg/zQrKSFr77r
