const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING"] })

client.login("OTMzOTkzNTA3MjYwMTAwNjA4.YepnPA.9qIbtSi7QtJTPCuefX1do6pkbO0")

client.on ("ready", () =>  {
    console.log ("Il bot è online!")
})
client.on("messageCreate", (message) => {
    if(message.content == "!bottone") {
        var button = new Discord.MessageButton()
            .setLabel("Cliccami")
            .setStyle("SUCCESS")
            .setCustomId("idCliccami")

        message.channel.send({content: "clicca sul botton", components: [button]})
    }

    if(message.content == "dep!server"){
          message.channel.send("__**Ecco il link per il nostro server**__ : https://discord.gg/YQfPBsTc96");
    }

    if(message.content == "dep!invite"){
          message.channel.send("__**Ecco il link per invitarmi**__ :https://discord.com/oauth2/authorize?client_id=933993507260100608&scope=bot&permissions=1099511627775")
    } 

    if(message.content == "dep!image"){
          message.channel.send("__**Ecco la mia immagine e del server**__: https://cdn.discordapp.com/attachments/930553618149539980/931241494990422107/IMG_2974.png")
    }
})