const Discord = require("discord.js");
const prefix = "e."

module.exports = async(bot, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return message.channel.send("Je ne peux pas répondre aux commandes en MP !")

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = bot.commands.get(commande);

    if (!cmd) return;

    cmd.run(bot, message, args);
};