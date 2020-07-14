const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (message.author.id !== "730350166820913163")
        return message.reply("This can only be used by the bot owner.")
    if (!message.guild || !message.member) return;
    var evalcode = message.content.split(" ").splice(1).join(" ");
    try {
        var evaled = eval(evalcode);
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        message.channel.send("Output:\n```js\n" + clean(evaled) + "```");
    } catch (err) {
        message.channel.send("Error: " + clean(err));
    }

    function clean(text) {
        if (typeof(text) === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        } else {
            return text;
        }
    }
}

module.exports.help = {
    name: "eval"
}