const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    let { body } = await superagent.get(
        `https://dog.ceo/api/breeds/image/random`
    );
    //console.log(body.message)
    if (!{ body }) return message.channel.send("I broke ! Try again");

    let Embed = new Discord.MessageEmbed()
        .setColor("#f05f")
        .setAuthor(`🐶 Ouaf !`, message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`EasyBOT DOGS `, bot.user.displayAvatarURL);
    message.channel.send(Embed)
};

module.exports.help = {
    name: "dog",
};