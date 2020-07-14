const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
        return message.channel.send(`Vous n'avez pa sle permission !`);

    if (message.mentions.users.size === 0) {
        return message.channel.send(`Vous devez mentionner un utilisateur !`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if (!ban) {
        return message.channel.send(`Je n'ai pas trouvé l'utilisateur !`);
    }

    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS"))
        return message.channel.send(`Le bot n'a pas la permission !`);

    ban.ban().then((member) => {
        message.channel.send(
            `${member.user.username} a été banni par ${message.author.username} !`
        );
        message.mentions.user
            .first()
            .send(
                `Vous êtes banni du serveur **${message.guild.name}** par ${message.author.username}`
            );
    });
};

module.exports.help = {
    name: "ban",
};