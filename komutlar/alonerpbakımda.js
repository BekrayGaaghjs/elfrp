 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`ELFRP`, client.user.avatarURL())
.setColor('YELLOW')
.setDescription(`**:point_down:|--:diamond_shape_with_a_dot_inside: **ELF RolePlay Bakımdadır**:diamond_shape_with_a_dot_inside:--|:point_down_tone2:\n :pray: **Sunucumuz şuanda bakıma alınmış verdiğimiz rahatsızlık yüzünden özür dileriz** :pray:\n -----------------------------------------------------------\n :pencil: Aktif Olunca Burdan Haberdar Olabilirsiniz :pencil:\n @everyone`)  
  .setImage(`https://cdn.discordapp.com/attachments/780112439160340490/780824988331671592/bakm.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "bakımda",
  aliases: []
}