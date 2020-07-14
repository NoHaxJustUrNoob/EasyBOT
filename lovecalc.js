const Discord = require('discord.js')
const getMember = ('./function.js/...')

module.exports.run = async(bot, message, args) => {

    let person = getMember(message, args[0]);

    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter((m) => m.id !== message.author.id)
            .random();
    }

    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

    let LoveEmbed = new Discord.MessageEmbed()
        .setColor("#ffb6c1")
        .addField(
            `☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`
        );

    message.channel.send(LoveEmbed);
}

module.exports.help = {
    name: "lovecalc"
}