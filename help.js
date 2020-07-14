const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let HelpEmbed = new Discord.MessageEmbed()
        .setAuthor("Help : Page d'aides")
        .addField(
            "<:badgediscordstaff:731789528175607829> Configuration :",
            "Coming Soon..."
        )
        .addField(":hammer: Modération :", "`ban`, `unban`, `kick`, `tempmute`, `unmute`, `clear`, `slowmode`")
        .addField(":tada: Animations :", "`gstart`, `reroll`, ")
        .addField(":moneybag: Economie :", "Coming Soon...")
        .addField(":rofl: Funs :", "`cat`, `dog`, `snipe`, `meme`, `say`, `ascii`")
        .addField(":scroll: Informations :", "`help`, `userinfo`, `botinfo`, `serverinfo`, `ping`, `invite`")
        .addField(":paperclip: Liens :", `[Serveur Support](https://discord.gg/4yUuGq8) ・ [Inviter le bot](https://discord.com/oauth2/authorize?client_id=731516779196579910&scope=bot&permissions=8)`)
        .setColor("#f05f");
    message.channel.send(HelpEmbed)
}

module.exports.help = {
    name: "help"
}