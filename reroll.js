const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Vous n\'avez pas la permissions de reroll les giveaways.');

    if (!args[0]) return message.channel.send('Aucun ID de giveaway donner');

    let giveaway = bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if (!giveaway) return message.channel.send('Je ne peux pas trouver ce giveaway.');

    bot.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        })
        .catch((e) => {
            if (e.startsWith(`Giveaway avec l'ID ${giveaway.messageID} n'est pas terminer.`)) {
                message.channel.send('Ce giveaway n\'est pas encore terminer.')
            } else {
                console.error(e);
                message.channel.send('Une érreur est survenue.')
            }
        })
}

module.exports.help = {
    name: "reroll"
}