const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async(bot, message, args) => {

    let user =
        message.guild.member(message.mentions.users.first()) ||
        message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Vous devez spécifier un utilisateur a rendre muet.");
    // Optional:
    // if (user.id === client.user.id) return message.channel.send("You can't mute me.");
    // if (user.id === message.author.id) return message.channel.send("You can't mute yourself.");
    let role = message.guild.roles.cache.find((r) => r.name === "Muted");
    let client = message.guild.members.cache.get(bot.user.id).roles.highest;

    if (!role) return message.channel.send("Je ne trouve pas le rôle `Muted`");
    if (role.position > bot.position)
        return message.channel.send("Le rôle est plus haut que le mien.");

    let time = args[1];

    if (!time) {
        if (user.roles.cache.has(role.id))
            return message.channel.send("L'utilisateur est déjà muet.");
        await user.roles
            .add(role.id)
            .catch((err) => message.channel.send(`Quelque chose ne vas pas: ${err}`));
        return message.channel.send(`${user.user.tag} est maintenant muet.`);
    } else {
        if (user.roles.cache.has(role.id))
            return message.channel.send("L'utilisateu est déjà muet !");
        await user.roles
            .add(role.id)
            .catch((err) => message.channel.send(`Quelque chose ne vas pas: ${err}`));

        let timer = setTimeout(function() {
            user.roles
                .remove(role.id)
                .catch((err) => message.channel.send(`Quelque chose ne vas pas: ${err}`));
            message.channel.send(`${user.user.tag} est maintenant non-muet.`);
        }, ms(time));

        bot.mute.set(user.user.id, timer).then
        message.channel.send(`${user.user.tag} et maintenant muet pendant **${ms(ms(time), { long: true })}**`);
    }
}

module.exports.help = {
    name: "tempmute"
}