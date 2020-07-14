const Discord = require("discord.js");
const jimp = require("jimp");

module.exports.run = async(bot, message, args) => {
    let permission = message.member.hasPermission("ADMINISTRATOR");

    if (!permission)
        return message.channel.send(
            "Vous manquez de la permission : `ADMINISTRATEUR`"
        );

    let cArgs = args[0];

    if (isNaN(cArgs))
        return message.channel.send(
            "Vous devez spécifier un ID de salon valide !"
        );

    try {
        bot.guilds
            .get(message.guild.id)
            .channels.get(cArgs)
            .send("Salon de bienvenue défini !");

        db.set(`${message.guild.id}`, cArgs);

        message.channel.send(
            "Vous avez bien défini le salon de bienvenue sur <#" + cArgs + ">"
        );
        return;
    } catch (e) {
        return message.channel.send(
            "Error: Il me manque des permissions, ou le salon n'existe pas..."
        );
    }
};
module.exports.help = {
    name: "channel",
};