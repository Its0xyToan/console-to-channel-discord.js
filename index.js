const { Client, Intent } = require("discord.js")
const { readdirSync } = require("fs")

const client = new Client({

    intents: [

        'GUILDS', 

        'GUILD_MEMBERS', 

        'GUILD_MESSAGES', 

        'GUILD_MESSAGE_REACTIONS', 

        'DIRECT_MESSAGES', 

        'DIRECT_MESSAGE_REACTIONS', 

        'DIRECT_MESSAGE_TYPING', 

        'GUILD_BANS', 

        'GUILD_INTEGRATIONS', 

        'GUILD_INVITES', 

        'GUILD_PRESENCES'

    ]

})
const config = require("./config")


client.on("ready", () => {
    client.application.commands.set(commands.map(({ execute, ...data }) => data))
    console.log("----------------------")
    console.log("Ready with " + client.user.tag)
    console.log("----------------------")
    client.user.setPresence({ activities: [{ name: '/help | EcoBot' }], status: 'WATCHING' });
})

let y = process.openStdin()
y.addListener("data", res => {

let x = res.toString().trim().split(/ +/g)
client.guilds.cache.get(config.server).channels.cache.get(config.channel).send(x.join(" "));
console.log(x.join(" ") + " was send")
});



client.login(config.token)
