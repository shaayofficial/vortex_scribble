const Discord = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  description: "To see the commands",
  run: async(client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setTitle("Commands").setDescription("**!verify**  To verify your Discord account to Roblox \n**!serverinfo** To check the servers info").setFooter("Help").setColor("#ff4757").setAuthor("Vero","https://i.imgur.com/UaHfuUX.png"))
  }
}