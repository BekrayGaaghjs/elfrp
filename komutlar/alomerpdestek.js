const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  const db = require('quick.db');
  

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`⚙  **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('**Yetkili Ekip İlgileniyor!** <@&759842245691179028> <@&759841860386029568> <@&759840900393861202> <@&758311979646451722> <@&758106281243836506>');


  message.guild.members.ban(user, 2);
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setDescription(`⚙ **Kullanıcı Başarıyla Banlandı**`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'destek',
  aliases: []
};

