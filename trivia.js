const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

        let questions = [

            {
                title: "Meilleur language de programmation :",
                options: ["JavaScript", "HTML/CSS", "Java", "Python"],
                correct: 1
            },
            {
                title: "Meilleur plât :",
                options: ["Fromage", "Pizza", "Cacahuète", "Bacon"],
                correct: 2
            },
            {
                title: "Meilleur bot",
                options: ["Mee6", "EasyBOT", "DankMemer", "Dyno"],
                correct: 2
            }

        ]

        let q = questions[Math.floor(Math.random() * (questions.length))]
        let i = 0;
        let TriviaEmbed = new Discord.MessageEmbed()
            .setAuthor("Trivia")
            .addField("Vous avez 15 secondes pour essayer de trouver la bonne réponse ! :", `${q.options.map(opt => {
            i++; 
            return `${i} - ${opt}\n`
            })}`)
        .setColor("#f05f")
        .setFooter("Demandé par " + message.author.tag)
    message.channel.send(TriviaEmbed)
    try {
        let message = await message.channel.awaitMessage(u2 => u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["time"]})
    } catch (e) {
        if (parseInt(message.first().content) == q.content) {
            return message.channel.send("Vous avez eu la bonne réponse !")
        } else {
            return message.channel.send("Vous n'avez pas trouvé la bonne réponse !")
        }
        
    }
}

module.exports.help = {
    name: "trivia"
}