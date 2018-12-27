const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);

client.on('message', message => {
  if (message.author.id !== '519054379031068672') return;
  if (message.content === '1d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '1c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content.startsWith("1!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client2.on('message', message => {
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '2d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '2c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content.startsWith("2!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client3.on('message', message => {
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '3d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '3c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content.startsWith("3!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client4.on('message', message => {
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '4d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '4c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content.startsWith("4!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client5.on('message', message => {
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '5d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '5c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content.startsWith("5!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '6d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content === '6c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '519054379031068672') return;
  if(message.content.startsWith("6!say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


client.on('message', message => { // Don't Play with this.
if (message.author.id !== '519054379031068672') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Visas ~ [ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // Don't Play with this.
if (message.author.id !== '519054379031068672') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Visas ~ [ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // Don't Play with this.
if (message.author.id !== '519054379031068672') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Visas ~ [ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => { // Don't Play with this.
if (message.author.id !== '519054379031068672') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Visas ~ [ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => { // Don't Play with this.
if (message.author.id !== '519054379031068672') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Visas ~ [ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => { // Don't Play with this.
if (message.author.id !== '519054379031068672') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Visas ~ [ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
