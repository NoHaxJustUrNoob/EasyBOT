const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.delete().catch(console.error);

    waiting = await message.channel.send("JE CHERCHE").catch(console.error);

    var pingEmbed = new Discord.MessageEmbed()
        .setAuthor("Latence du bot & de l'api discord.js", bot.user.avatarURL)
        .setColor("#f05f")
        .addField(
            "**:robot: EasyBOT**",
            "> `" +
            `${waiting.createdTimestamp - message.createdTimestamp}` +
            "ms`",
            true
        )
        .addField(
            "**<:badgediscordstaff:731789528175607829> API discord.js :**",
            "> `" + Math.round(bot.api.ping) + "ms`",
            true
        )
        .setTimestamp(message.createdAt)
        .setFooter(
            "EasyBOT | demandé par @" + message.author.tag,
            bot.user.avatarURL
        );
    waiting.edit(pingEmbed).catch(console.error);
};
module.exports.help = {
    name: "ping",
};