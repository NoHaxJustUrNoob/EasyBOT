const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const token = require("./config.json");
const fs = require("fs");
const bdd = require("./bdd.json");
const { config } = require("process", "./config.json");
bot.config = { config };




bot.commands = new Discord.Collection

const { GiveawaysManager } = require("discord-giveaways");

bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000",
        reaction: "🎉",
    },
});

fs.readdir("./Commands/", (error, f) => {
    if (error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if (commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {
        let commande = require(`./Commands/${f}`);
        console.log(`${f} commandes chargée !`);

        bot.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        bot.on(event, events.bind(null, bot));
    });
});

bot.snipes = new Map();
bot.on("messageDelete", function(message, channel) {
    bot.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

bot.login(token.token)

bot.on("message", (message) => {
    if (message.author.bot) return;

});