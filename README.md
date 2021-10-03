# Lua Bot
Lua bot is an Discord.js bot. On this moment he can kick and ban users.
![](https://github.com/artur-asimov/lua-bot-js/blob/main/luabotlogo.png?raw=true)

## Installation

```bash
git clone https://github.com/artur-asimov/lua-bot-js.git
```

## Set it up
Go to the `lua-bot-js/config.json` and paste your token in the config. Also go to the discord and check if you have developer mode enabled. If yes, copy your mute role id in config and admin role also in the config.
```json

{
    "token": "your-token-here",
    "prefix": "!",
    "mute-role-id": "your-mute-role-here",
    "admin-role-id": "your-admin-role-here"
}
```

## Run
In the `lua-bot-js/` directory run:
```bash
npm run dev
```
