const ms = require("ms");

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send("Oopsie, tu n'as pas le droit de faire ça.");
    }

    let channel = message.mentions.channels.first(),
        time = args.slice(1).join(" ");

    if (!channel) time = args.join(" "), channel = message.channel;
    // Si l'utilisateur n'inclut pas la chaîne.

    if (message.flags[0] === "off") {
        channel.setRateLimitPerUser(0);
        return message.channel.send(`<#${channel.id}> le slowmode a été désactivé.`);
    }

    if (!time) return message.channel.send("Veuillez inclure le format de l'heure.");

    let convert = ms(time); // Il en résultera les millisecondes.
    let toSecond = Math.floor(convert / 1000); // Cela convertira le ms en s. (secondes)

    if (!toSecond || toSecond == undefined) return message.channel.send("Veuillez insérer le format d'heure valide!");

    if (toSecond > 21600) return message.channel.send("La minuterie doit être inférieure ou égale à 6 heures.");
    else if (toSecond < 1) return message.channel.send("La minuterie doit être supérieure ou égale à 1 seconde.");


    await channel.setRateLimitPerUser(toSecond);
    return message.channel.send(`Ce salon : <#${channel.id}> ralentit de **${ms(ms(time), { long: true })}**.`);


}

module.exports.help = {
    name: "slowmode",
    description: "Ralentir le canal.",
    usage: "slowmode [channel] <time>",
    example: "slowmode #general 5s \ nslowmode 5.25 hrs"

}