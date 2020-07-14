const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

    let { body } = await superagent.get(`http://aws.random.cat/meow`);
    //conso le.l og(body.file)
    if (!{ body }) return message.channel.send("I broke ! Try again");

    let Embed = new Discord.MessageEmbed()
        .setColor("#f05f")
        .setAuthor(`🐱 Meow !`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`EasyBOT CATS`, bot.user.displayAvatarURL);
    message.channel.send(Embed)
};

module.exports.help = {
    name: "cat",
};