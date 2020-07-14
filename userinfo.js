const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let UIEmbed = new Discord.MessageEmbed()
        .setAuthor(`Infos d'utilisateurs`)
        .setThumbnail(message.author.displayAvatarURL())
        .addField("Infos de compte", `**Nom d'utilisateur :** ${message.author.tag} \n**Compte créé le :** ${message.author.createdAt}`)
        .setColor("#f05f");
    message.channel.send(UIEmbed)

}

module.exports.help = {
    name: "userinfo",
    aliasses: ["ui"]
}