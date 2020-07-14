const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let AvatarEmbed = new Discord.MessageEmbed()
        .setAuthor("Avatar de :", message.author.tag)
        .setImage(message.author.displayAvatarURL())
        .setFooter("Avatar de" + message.author.tag)
        .setColor("#f05f")
    message.channel.send(AvatarEmbed)

}

module.exports.help = {
    name: "avatar"
}