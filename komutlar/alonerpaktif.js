const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`ELFRP`, client.user.avatarURL())
.setColor('YELLOW')
.setDescription(`**:diamond_shape_with_a_dot_inside: **ELF RolePlay** :diamond_shape_with_a_dot_inside:\n :mega:**Sunucumuz Aktif!!**:mega:\n :diamonds:**Server İP** |:pushpin: **connect 185.171.1.132**:diamonds:\n :diamonds:**TeamSpeak **|:pushpin:  **84.54.13.159:9050:diamonds:\n @everyone`)  
  .setImage(`https://cdn.discordapp.com/attachments/780112439160340490/780824991515410442/aktif.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "aktif",
  aliases: []
}