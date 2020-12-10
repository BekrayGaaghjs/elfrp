 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`ELFRP Yardım Menüsü`, client.user.avatarURL())
.setColor('YELLOW')
.setDescription(`ELFRP Komutları`)  
.addField(`__Aktif__`,` \`${prefix}aktif (Yetkililer Kullanabilir)\``,true)
.addField(`__Bakımda__`,` \`${prefix}bakımda (Yetkililer Kullanabilir)\` `,true)
.addField(`__İp__`,` \`${prefix}ip \`  `,true)
.addField(`__Kayıt__`,` \`${prefix}kayıt (Kayıttakiler Kullanabilir)\` `,true)
.addField(`__Destek__`,` \`${prefix}destek\` `,true)   
.addField(`__Havadurumu__`,` \`${prefix}havadurumu (Şehir)\` `,true)  
  .setImage(`https://cdn.discordapp.com/attachments/780112439160340490/780814924560990259/elfrpgif.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}