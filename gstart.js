const Discord = require('discord.js')
const { config } = require("../config.json")
const ms = require('ms')
const { execute } = require("./ascii")
const { hostedBy, everyoneMention } = require("../config.json");

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(
            "Vous n'avez pas les permissions de faire des giveaways."
        );

    let channel = message.mentions.channels.first();

    if (!channel)
        return message.channel.send(
            "Merci de préciser un channel ou le giveaway sera lancer"
        );

    let giveawayDuration = args[1];

    if (!giveawayDuration || isNaN(ms(giveawayDuration)))
        return message.channel.send(
            "Merci de dire combien de temps le giveaway sera disponible ( Syntaxe: <nombre><seconds, minutes, hours, days>)"
        );

    let giveawayWinners = args[2];

    if (isNaN(giveawayWinners) || parseInt(giveawayWinners) <= 0)
        return message.channel.send("Merci de préciser le nombre de gagnants");

    let giveawayPrize = args.slice(3).join(" ");

    if (!giveawayPrize)
        return message.channel.send("Ok donc, je ne vais rien faire gagner.");

    bot.giveawaysManager.start(channel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayWinners,
        hostedBy: hostedBy ? message.author : null,

        messages: {
            giveaway:
                (everyoneMention ? "@everyone\n\n" : "") +
                "L'heure du Giveaway !",
            giveawayEnded:
                (everyoneMention ? "@everyone\n\n" : "") +
                "L'heure du Giveaway est fini !",
            timeRemaining: "Fini dans: **{duration}**",
            inviteToParticipate: "Réagis avec 🎉 pour participer",
            winMessage: "Bravo {winners}, vous avez gagnez **{prize}**",
            embedFooter: "Xio Giveaway",
            noWinner: "Je ne peux pas déterminer de gagnant(e)s.",
            hostedBy: "Fait par {user}",
            winners: "gagnant(e(s)",
            endedAt: "Fini à",
            units: {
                seconds: "secondes",
                minutes: "minutes",
                hours: "heures",
                days: "jours",
                pluralS: false,
            },
        },
    });

    message.channel.send(`Giveaway commencer dans ${channel}`);
}

module.exports.help = {
    name: "gstart"
}