const Discord = require("discord.js")

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES', 'GUILD_BANS'], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const config = require("./config")


client.on("ready", () => { //When the bot is ready
    console.log("----------------------")
    console.log("Ready with " + client.user.tag)
    console.log("----------------------")
})
/////////////////////////////////////////////////////////////////////////
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.guilds.cache.get(config.server).channels.cache.get(config.channel).send(x.join(" "));
    console.log(x.join(" ") + " was send")
});
/////////////////////////////////////////////////////////////////////////


client.login(config.token) //Login the bot
