const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let InviteEmbed = new Discord.MessageEmbed()
        .setAuthor("Invitation :")
        .addField(
            "Invite le bot ici :",
            `Clique [ici](https://discord.com/oauth2/authorize?client_id=731516779196579910&scope=bot&permissions=8) pour inviter le bot`
        );
    message.channel.send(InviteEmbed)

}

module.exports.help = {

    name: "invite"
}

exports.config = {
    alias: ["inv"]
}