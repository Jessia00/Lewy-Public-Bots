const Discord = require('discord.js') 
const lewy = require("../../schemas/dolar");
const { altin, altin2, rewards } = require("../../configs/emojis.json")
let ms = require("discord.js");
const ayar = require("../../configs/ayarName.json");

module.exports = {
    conf: {
      aliases: ["hesapoluştur","hesap-oluştur"],
      name: "hesapoluştur",
      help: "hesapoluştur",
      category: "market",
    },
  
run: async (client, message, args) => {

   if (!message.guild) return;

   let kanallar = ayar.coinKomutKanalİsim;
   if (!kanallar.includes(message.channel.name)) return message.reply({ content:`${kanallar.map(x => `${client.channels.cache.find(chan => chan.name == x)}`)} kanallarında kullanabilirsiniz.`}).then((e) => setTimeout(() => { e.delete(); }, 10000)); 
	
	let data = await lewy.findOne({userID: message.author.id, guildID: message.guild.id});

  if(!data || data && !data.hesap.length) {
    await lewy.findOneAndUpdate({userID: message.author.id, guildID: message.guild.id}, {$push: {hesap: 1}}, {upsert: true})
    await lewy.findOneAndUpdate({userID: message.author.id, guildID: message.guild.id}, {$inc: {dolar: 500}}, {upsert: true})
    message.reply({ content:`Başarı ile coin hesabını oluşturdun, oyunlarımızı deneyimlemen için hesabına **500** hediye coin yolladım. İyi eğlenceler!`})
     } else if(data) {
    message.reply({ content:"Zaten daha önceden bir hesap oluşturmuşsun!"})
  }
}}
