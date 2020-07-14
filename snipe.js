const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    const msg = bot.snipes.get(message.channel.id)
    if (!msg) return message.channel.send("Il n'ya pas d'ancien message supprimés !")

    let SnipeEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .addField(msg.content)
        .setColor("#f05f")
    message.channel.send(SnipeEmbed)
}


module.exports.help = {
    name: "snipe"
}