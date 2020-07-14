const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo",
    category: "bot",
    run: async(bot, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(bot.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields({
                name: ':globe_with_meridians: Servers',
                value: `Serveurs ${bot.guilds.cache.size} servers.`,
                inline: true
            }, {
                name: ':tv: Channels',
                value: `Channel ${bot.channels.cache.size} channels.`,
                inline: true
            }, {
                name: ':busts_in_silhouette: Server Users',
                value: `Utilisateurs ${bot.users.cache.size}`,
                inline: true
            }, {
                name: ':hourglass_flowing_sand: Ping',
                value: `${Math.round(bot.ws.ping)}ms`,
                inline: true
            }, {
                name: 'Date dinscription',
                value: bot.user.createdAt,
                inline: true
            }, {
                name: 'Servers Info',
                value: `Noyaux: ${os.cpus().length}`,
                inline: true
            })
            .setFooter(`Créé par: ${message.author.tag}`, message.author.displayAvatarURL())


        await message.channel.send(embed)
    }
}

module.exports.help = {
    name: "botinfo"
}