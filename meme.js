const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {

    const subReddits = ["dankmeme", "meme", "memes"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Voici votre meme. De r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "meme"
}