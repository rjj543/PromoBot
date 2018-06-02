const prefix = "!"
const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('message', (message) => {
   
    if(message.content == prefix + 'Channel' || 'channel') {
        message.channel.sendMessage('https://www.youtube.com/channel/UChXNvQj5mw-vJmC_Lv3f10Q');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'SecondChannel' || 'secondchannel') {
        message.channel.sendMessage('https://www.youtube.com/channel/UCbjZGpSgIMbfdw5OXPzJvbQ');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'Cmds' || 'cmds') {
        message.channel.sendMessage('```Channel``` ```SecondChannel``` ```Prefix.```');
    }
});

bot.on('message', (message) => {
   
    if(message.content == 'Prefix') {
        message.channel.sendMessage('The current prefix is: !');
    }
});



bot.login(process.env.BOT_TOKEN);
// yeet it up B
