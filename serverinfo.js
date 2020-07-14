const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let ServerInfoEmbed = new Discord.MessageEmbed()
        .setAuthor("Informations du serveur")
        .setThumbnail(message.guild.iconURL())
        .addField("Informations du serveur :", `Créateur du serveur : ${message.guild.owner} \nServeur créé le : ${message.guild.createdAt}`)
        .setColor("#f05f")
    message.channel.send(ServerInfoEmbed)
}

module.exports.help = {
    name: "serverinfo"
}