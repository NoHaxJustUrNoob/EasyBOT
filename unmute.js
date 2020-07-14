const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("You need to mention the user.");

    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!role) return message.channel.send("Couldn't find the mute role.");

    if (!user.roles.cache.find(r => r.name === "Muted")) return message.channel.send("The user doesn't get muted.");

    await user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`));
    await clearTimeout(client.mute.get(user.user.id));
    await client.mute.delete(user.user.id);
    await message.channel.send(`${user.user.tag} is now unmuted.`);
}

module.exports.help = {
    name: "unmute"
}