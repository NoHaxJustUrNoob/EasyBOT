module.exports = async(bot, message, args) => {
    bot.user.setActivity(
        "v1.0 | e.help pour de l'aide", { type: "LISTENING" }
    );
}