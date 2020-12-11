const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is ready!')

  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!')
  })

  const images = [
    "https://imgur.com/yLhLYXG.png",
    "https://imgur.com/RaIkxBs.png",
    "https://imgur.com/nfl1m8j.png",
    "https://imgur.com/hobyoUk.png",
    "https://imgur.com/dZWD7y2.png",
    "https://imgur.com/37D1d5j.png",
    "https://imgur.com/Gr5BGom.png",
    "https://imgur.com/9twEcGz.png",
    "https://imgur.com/xEcMnH5.png",
    "https://imgur.com/dCuEgZk.png",
    "https://imgur.com/D8H26Nw.png",
    "https://imgur.com/h9t3gfA.gif",
    "https://imgur.com/0dLR8Ft.png",
    "https://imgur.com/swf5DoP.png",
    "https://imgur.com/xHTZqEo.png",
    "https://imgur.com/Iq3daDj.png",
    "https://imgur.com/qSpq8mf.png",
    "https://imgur.com/qF6Osmd.png",
    "https://imgur.com/2WZtM45.png",
    "https://imgur.com/t7X44e2.png",
    "https://imgur.com/Gz2lxMq.png",
    "https://imgur.com/06bj8t7.png",
    "https://imgur.com/Akw28sX.png",
    "https://imgur.com/s7luRQZ.png",
    "https://imgur.com/5gISZPV.png",
    "https://imgur.com/d3bTXEI.png",
    "https://imgur.com/ezt3ITy.png",
    "https://imgur.com/Fsce2i2.png",
    "https://imgur.com/d2xS9Xz.png",
    "https://imgur.com/ewh8u3n.png",
    "https://imgur.com/rYf9CJ6.png",
    "https://imgur.com/jr3UJyN.png",
    "https://imgur.com/UEOsYxA.png",
    "https://imgur.com/N8EPnPj.png",
    "https://imgur.com/zGxfmtP.png",
    "https://imgur.com/F50XCw8.png",
    "https://imgur.com/wIZV9c9.png",
    "https://imgur.com/VRnxND5.png",
    "https://imgur.com/ttzgq7c.png",
    "https://imgur.com/1P4Qg86.png",
    "https://imgur.com/ZmoK4ye.png",
    "https://imgur.com/BgVXpYh.png",
    "https://imgur.com/z45ffrw.png",
    "https://imgur.com/MhtSpry.png",
    "https://imgur.com/4KMxcxI.png",
    "https://imgur.com/r1IQjkN.png",
    "https://imgur.com/Jq0aQrh.png",
    "https://imgur.com/zsIzX3j.png",
    "https://imgur.com/RTkCAdY.png"

  ]

setInterval(() => {
const random = Math.floor(Math.random() * (images.length - 1) + 1); 
client.user.setAvatar(images[random]); 
}, 1800000);

const activities_list = [
  "with my nakamas!", 
  "your doubts! Type it: sj.help", 
  "the Master Chef.",
  "with エリアン#9865",
  "with ❲🎴❳ Aᴋᴀsʜɪ • 愛 - 平和.#2364"
  ];
const type_list = [
 "PLAYING",
 "LISTENING",
 "WATCHING",
 "PLAYING",
 "PLAYING"
]

setInterval(() => {
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
  client.user.setActivity(activities_list[index], {type: type_list[index]}); 
}, 10000);

})

command(client, ['cc', 'clearchannel'], (message) => {
  if (message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results)

      var list = [
        `#DAA520`, 
        `#FFD700`, 
        `#FFFF00`
      ];

      var rand = list[Math.floor(Math.random() * list.length)];

      const message2 = new MessageEmbed()

      .setColor(rand)
      .addField(`O chat foi limpo por:`, `${message.author.tag}.`)
      .setTimestamp()

      message.channel.send(message2);
    })
  }
})

client.login(config.token)