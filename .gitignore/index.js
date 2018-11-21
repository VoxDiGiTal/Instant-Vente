const Discord = require("discord.js"),
bot = new Discord.Client();
const logcolor = require("chalk");
const path = require('path')
const fs = require('fs');
const snek = require('snekfetch');
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warn.json", "utf8"));


////// prefix : 

let prefix = "-";

/////

bot.login(process.env.TOKEN)

  
bot.on('ready', () => {
  const bleu = logcolor.cyan;
  const vert = logcolor.green;
  const rouge = logcolor.red;
  const rose = logcolor.magenta;
  let MemberCount = bot.users.size;
  let ServerCount = bot.guilds.size;
  
  console.log(vert("WELCOME TO THE CONSOLE LOG BOT"));
  console.log(bleu(`Nom du bot    : ${bot.user.tag}!`));   
  console.log(bleu(`ID du bot     : ${bot.user.id}`));        
  console.log(bleu(`Token: du bot : ${bot.token}`));     
  console.log(bleu(`Nom du bot    : ${bot.user.tag}`));       
  console.log(rose("------------------------------------"));
  console.log(rouge("Stats Of The Bot :"));
  console.log(rose("------------------------------------"));
  console.log(bleu(`Utilisateurs : ${MemberCount}`));     
  console.log(bleu(`Serveurs     : ${ServerCount}`)); 
  bot.user.setPresence({ game: { name: "Open = [ -help ] | "  + "Add Moi -invite | " + `${bot.guilds.size}` + " servers" }
                     })
});


bot.on('message', async message => {
  let msg = message;
  var colorEmbed = "#FF0000"
  const starting = message.content;
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  var rez = args.join (" ");
  const admin = message.author.id !== "240291221203976192";
  if(message.author.bot) return;
  
  if(starting.startsWith(prefix + "Admin")) {
    if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  }; 
    if (message.deletable) message.delete();
    const help1 = new Discord.RichEmbed()
    .setTitle("**Bienvenue sur le panel Help V1.0**")
    .addField('__-setGame + <jeux>__', "**Le bot change son jeux.**")
    .addField('__-setWatch + <wtch>__', "**Le bot change son watching.**")
    .addField('__-setStream + <stream>__', "**Le bot change son stream.**")
    .addField('__-setEcoute + <ecoute>__', "**Le bot change son ecoute.**")
    .addField('__-setNull__', "**Remet a zero le jeux/stream/ecoute/watch.. du bot**")
    .addField('__-setStatut + <idle/dnd/invisible/online>__', "**// idle = absent | dnd = offline  | invisible = invisible  | online = online \\**")
    .setColor(colorEmbed)
    .setFooter('@Copyright ©2018 VoxDiGiTal')
    message.author.sendMessage(help1).catch(console.error);
   }
   ////////////////////////////// CHANGE TON JEUX ///////////////////////////////////////////
  
  if (starting.startsWith(prefix + 'setGame')) {
 if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  };    
  if (message.deletable) message.delete();
      bot.user.setGame(rez); return message.reply('Mon **jeu** a était **modifié** avec **succés** !!')
  }  else
    
///////////////////////////// CHANGE TON ECOUTE ///////////////////////////////////////////
    
 if (starting.startsWith(prefix + 'setEcoute')) {
   if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  }; 
 if (message.deletable) message.delete();
     bot.user.setActivity((rez), { type: "LISTENING" }); return message.reply('Mon **Ecoute** a était **modifié** avec **succés** !!')
  } else
    
///////////////////////////// CHANGE TON Watch ///////////////////////////////////////////

 if (starting.startsWith(prefix + 'setWatch')) {
   if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  }; 
 if (message.deletable) message.delete();
     bot.user.setActivity((rez), {type: "WATCHING"}); return message.reply('Mon **Watching** a était **modifié** avec **succés** !!')
  } else
    
///////////////////////////// CHANGE TON STREAM ///////////////////////////////////////////

 if (starting.startsWith(prefix + 'setStream')) {
   if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  }; 
 if (message.deletable) message.delete();
     bot.user.setActivity((rez), {type: "STREAMING", url: "https://www.twitch.tv/JackRyan"}); return message.reply('Mon **Streaming** a était **modifié** avec **succés** !!')
  } else
    
///////////////////////////// REMET A NULL  ///////////////////////////////////////////
    
 if (starting.startsWith(prefix + 'setNull')) {
   if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  }; 
 if (message.deletable) message.delete();
     bot.user.setActivity(null); return message.reply('Mon **Jeux, Stream, Watch, Ecoute** a était **remit** par **Default** !!')
  } else

/////////////////////////////// CHANGE TON STATUT /////////////////////////////////////////////
    
  if (starting.startsWith(prefix + 'setStatut')) {
    if(admin) {
      return message.reply('Tu na pas la permission pour effectuer ceci')
  }; 
	if (message.deletable) message.delete();
      bot.user.setStatus(rez); return message.reply('Mon **status** a était **modifié** avec **succés** !!')
    // idle = absent | dnd = offline  | invisible = invisible  | online = online \\
    } 
  
 
  if(message.content.startsWith(prefix + "InstantV")) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Tu na pas la permission de faire ceci !')
  
  if (!message.guild.roles.find("name", "InstantV")) return message.reply('Il est pour moi impossible de trouvé Le role **InstantV**')
  
  message.reply('La commande vient d’être activer !')
    
  if(message.deletable) message.delete();
    
  var theInstantV = message.guild.roles.find("name", "InstantV")

  let interval = setInterval(function () {
      
  theInstantV.setColor("RANDOM").catch(console.error);
                                         
  }, 1000)
  
  }
  
  
  if(starting.startsWith(prefix + 'say')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Tu na pas la permission de faire ceci !')
  
    var rep = args.join(" ");
    
    if (rep === "") {
   return message.channel.send("Mauvaise utilisation de la commande, Utilisation :  "+prefix+"say <message>")
    };
    if(message.deletable) message.delete();
    
    message.channel.send(rep);
    
  }
  if(starting.startsWith(prefix + "report")) {
    
   var report = args.join(" ")
              if (report === "") {
                return message.channel.send("Mauvaise utilisation de la commande, Utilisation :  "+prefix+"report <message>")
              };
             let sicon = message.author.displayAvatarURL;                      
            var reportembed = new Discord.RichEmbed()
     
                        .setTitle("__**Un report vient d'être envoyé  !**__")
                        .addField("L'auteur du report : ",message.author.tag)  
                        .setThumbnail(sicon)
                        .addField("Serveur du report : ", message.guild.name, true)
                        .setDescription("Ce message est : " + report)
                        .setTimestamp()    
                        .setColor(colorEmbed)                              
                        .setFooter('@Copyright Instant-Vente')
           bot.channels.find('id',"508741482648436736").send(reportembed).catch(console.error);  
           message.reply("Veuiller regarder Vos Message Privé. !")
           message.author.send("**Votre report à bien été envoyé. __Un admin vous répondra bientot__**").catch(console.error);
 
                  }
    if(starting.startsWith(prefix + "ping")) {
      const ping = new Discord.RichEmbed()
      .setAuthor(message.author.username + " Voici le ping de " + bot.user.username + " :", bot.user.avatarURL)
      .setDescription('Pong! Le ping est ' + `${Date.now() - message.createdTimestamp}` + 'ms')
      .setColor(colorEmbed)
      
      message.channel.send(ping).catch(console.error);
    }
  
  if(starting.startsWith(prefix + "serverinfo")) {
    var date = message.guild.createdAt;
    let infoserv = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(colorEmbed)
    .addField("Nom du Server :", message.guild.name)
    .addField("Id du Server :", message.guild.id)
    .addField("Createur du Server :", message.guild.owner)
    .addField("Id du Createur du Server :", message.guild.owner.id)
    .addField("Serveur créé le :", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes())
    .addField("Nombre de personne dedans :", message.guild.memberCount)
    .addField("Nombre de channel :", message.guild.channels.size)
    .addField("Nombre d'emoji :", message.guild.emojis.size)
    .addField("Vérificaton du Server :", message.guild.verificationLevel)
    
    message.channel.send(infoserv).catch(console.error)
    }
    
    if(starting.startsWith(prefix + "invite")) {
    let version = "Version 1.0"
    const bot = new Discord.Client();
    var date = new Date(bot.uptime);
    var days = date.getUTCDate() - 1;
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
 
    const bote = new Discord.RichEmbed()
    .setTitle(':crown:  Cliquer ici pour ajouter le bot :crown:')
    .addField('Version Du Bot :', version)
    .addField('Usage de la mémoire :', "0.93 Mo ")
    .addField('Librarie Utilisé :', "Discord.js Version : 11.4.2")
    .addField('Allumé depuis :',  (Math.round(bot.uptime / (1000 * 60 * 60))) + 'h  ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + 'min ' + (Math.round(bot.uptime / 1000) % 60) + 's')
    .addField('Dévellopeur :', ":heart: インスタントセール#3403 | Instant-Vente | VoxDiGiTal:heart:")
    .setURL('')
    
    .setColor(colorEmbed)
    message.channel.send(bote).catch(console.error)
      }
  
  if(starting.startsWith(prefix + "ban")) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
    
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je ne trouve pas la personne que tu demande :thinking:!");
    let bReason = args.join(" ").slice(22);
    if (!bReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
   const author  = message.author.username + '#' + message.author.discriminator;         
 
     
    await bUser.ban(bReason)
    .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu ban car : ${error}`));
  
    message.channel.send(`${bUser} ban car ${bReason} par ${author}`)
     
}
  
  if(starting.startsWith(prefix + "mute")) {
    let author = message.author;    
 
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("Vous n'avez pas la permission d'utiliser la **__COMMANDE MUTE__** !!");
 // CREATION DU RLE SI IL EXISTE PAS
  
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                name: "Muted",
                color: "#00FFOO",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                VIEW_CHANNEL: false
            });
        });
        } catch(e){
        console.log(e.stack);
            }
        }
  // RAISON DU MUTE
 
  let raison = args.join(" ").slice(22);
  if (!raison) return message.reply("Merci de bien vouloir me fournir une raison")
   
  await(tomute.addRole(muterole.id))
   .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu mute car : ${error}`));
    
  message.channel.send(`${tomute} mute car ${raison} par ${author}`)
    
  }

  if(starting.startsWith(prefix + "unmute")) {
    let author = message.author;    

 if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("Vous n'avez pas la permission d'utiliser la **__COMMANDE UNMUTE__** !!");
 // CHERCHE ROLE 
  var unmuterole = message.guild.roles.find("name", "Muted")
  // CHERCHE USER 
  var tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
		  
  // RAISON DU DU UNMUTE
 
  let raison = args.join(" ").slice(22);
  if (!raison) return message.reply("Merci de bien vouloir me fournir une raison")
  await (tounmute.removeRole(unmuterole.id))
    .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu unmute car : ${error}`));
  
  message.channel.send(`${tounmute} unmute car ${raison} par ${author}`)
  
	    }
  if(starting.startsWith(prefix + "kick")) {
    let author = message.author;    

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission d'utiliser la **__COMMANDE UNMUTE__** !!");
 
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Mais je ne la trouve pas :thinking:");
    let kReason = args.join(" ").slice(22);
    if (!kReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
    
    await kUser.kick(kReason)
      .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu kick car : ${error}`));
    message.channel.send(`${kUser} Kick car ${kReason} par ${author}`)
  
  }
  if(starting.startsWith(prefix + "clear")) {
    let author = message.author;    

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission d'utiliser la **__COMMANDE CLEAR__** !!");

  if (isNaN(args[0])) return message.channel.send("Vous n'avez pas mentionner un nombre exact de message a supprimé. // exemple: /clear 10 `");
  
   if (args[0] > 100) return message.channel.send("Vous devez fournir un nombre inférieur a 100 // exemple: /clear 99`");


  message.channel.bulkDelete(args[0])
    .then(messages =>
     message.reply (`Vous venez de supprimer ${messages.size} sur ${args[0]}. ! `)
    )
  }

  
  if(starting.startsWith(prefix + "whois")) {
  let mention = message.mentions.users.first();
  if (!mention) {
        return message.reply("Veuillez mentionné une personne");
  }
  const rejointdiscord = (mention.createdAt.getDate() + 1) + '/' + (mention.createdAt.getMonth() + 1) + '/' + mention.createdAt.getFullYear() + ' | ' + mention.createdAt.getHours() + ':' + mention.createdAt.getMinutes() + ':' + mention.createdAt.getSeconds();
  
  let last;
    if (mention.lastMessage === null) {
        last = 'Cette utilisateur na pas récemment parler';
    } else {
        last = mention.lastMessage;
    }
  let stat;
    if (mention.presence.status === 'offline') {
        stat = 'Offline';
    } else if (mention.presence.status === 'online') {
        stat = 'Online';
    } else if (mention.presence.status === 'dnd') {
        stat = 'Indisponible';
    } else if (mention.presence.status === 'idle') {
        stat = 'Invisible';
    }
  let game;
    if (mention.presence.game === null) {
        game = 'Cette utilisateur na actuellement pas de jeux lancé.';
    } else {
        game = mention.presence.game.name;
    }
  let mentione;
  if (mention.bot === false) {
    mentione = 'N\'est pas un bot.'
    } else if (mention.bot === true) {
    mentione = 'Est un bot.'
    }
  const whois = new Discord.RichEmbed()
  .addField("Infomation :", `Pseudo : ${mention.username} \n Tag : ${mention.tag} \n Discriminateur : ${mention.discriminator} \n Id : ${mention.id} \n Rejoint discord : ${rejointdiscord} \n Son Statut : ${stat} \n Dernier Message Envoyé : ${last} \n Cet user ${mentione} \n Utilisateur : ${game}`)
  .addField(`Role que le joueur a sur le serveur ! :`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``' + '\n')
  .setThumbnail(mention.displayAvatarURL)
  .setColor(colorEmbed)
  
    
  message.channel.send(whois).catch(console.error);
  }
  
  if(starting.startsWith(prefix + "agony.esport")) {
    const help = new Discord.RichEmbed()
    .setTitle(':crown:  Cliquer ici pour ajouter le Discord Agony :crown:')
    .setURL('https://discord.gg/99wgC7z')
    .addField('__Dévellopeur__', '**:heart: インスタントセール#3403 | Instant-Vente | VoxDiGiTal:heart:**')
  .setColor(colorEmbed)
  
    message.author.sendMessage(help).catch(console.error);
    message.channel.send("**Un message contenant toute les commande vien d'être envoyer**")
  }
  if(starting.startsWith(prefix + "help")) {
    const help = new Discord.RichEmbed()
    .setTitle("**Bienvenue sur le panel Help V1.0**")
    .addField('__-say + <message>__', "**Le bot repette ce que tu a dit.**")
    .addField('__-pub__', '**Envoie la pub du discord officiel**')
    .addField('__-report <message>__', '**Envoie un report au serveur offciel pour des bug..**')
    .addField('__-serverinfo__', '**Affiche les information sur le serveur**')
    .addField('__-invite__', "**Pour m'ajouter sur votre serveur**")
    .addField('__-kick <mention> <reason>__', '**Kick la personne mentionné pour le motif demandé**')
    .addField('__-ping__', '**envoie une requette entre le serveur et vous. !**')
    .addField('__-ban <mention> <reason>__', '**Ban la personne mentionné pour le motif demandé**')
    .addField('__-mute <mention> <reason>__', '**Mute la personne mentionné pour le motif demandé**')
    .addField('__-unmute <mention> <reason>__', '**Unmute la personne mentionné pour le motif demandé**')
    .addField('__-clear <Nombre>__', "**Supprime jusqu'a 100 message demandé**")
    .addField('__-whois <mention>__', "**Affiche les informations de la personne mentionné**")
    .addField('__-blowmix__', '**Change la couleur du role rainbow à chaque secondes : \n[Crée le rôle (blowmix) et placer le au dessus de tout les rôles et faites la même chose pour le rôle du bot mais il devra être au dessus du rôle *blowmix***')
    .addField('__-warn <mention>__', '**Avertisement de la personne mentionné + le motif**')
    .addField('Dévellopeur :', "インスタントセール#3403  | Instant-Vente")
    .setColor(colorEmbed)
    
    message.author.sendMessage(help).catch(console.error);
    message.channel.send("**Un message contenant toute les commande vien d'être envoyer**")
  }
  
  if(starting.startsWith(prefix + "warn")) {
  
   // PARAMETRE DU DROIT D USE LA COMMANDE
  
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission d'utiliser la **__COMMANDE WARN__** !!");
  let aUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  let reason = args.join(" ").slice(22);

  if(!warns[aUser.id]) warns[aUser.id] = {
    warns: 0
  };
  
// RAJOUTE 1 WARN A CHAUUE FOIS //
  
  warns[aUser.id].warns++;

// ENREGISTRE LES WARN SUR WARN.JSON ///
  fs.writeFile("./warn.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
  
  if (reason === "") {
      return message.channel.send("Mauvaise utilisation de la commande, Utilisation :  "+prefix+"warn <user> <reason>")
  };
  // 1 EME WARN AVERTISMENT
  
  if(warns[aUser.id].warns == 1){
   message.reply(`<@${aUser.id}> Avertisment cause: 1er Warn, Au bout du 2 ème  warn mute 10m, reason: ${reason}.`);
 }
  
  // 2 EME WARN CAUSE 10 M MUTE /////
  
  if(warns[aUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
   
    let mutetime = "10m";
    await(aUser.addRole(muterole.id));
    message.channel.send(`<@${aUser.id}> a été muted pour ${mutetime} cause: 2ème Warn, Au bout du 3 ème  warn kick, reason: ${reason}.`);

    setTimeout(function(){
      aUser.removeRole(muterole.id)
      message.reply(`<@${aUser.id}> a été unmuted cause: Time Up. !`)
    }, ms(mutetime))
  }
  
  /// 3 EM WARN ///
  
  if(warns[aUser.id].warns == 3){
    message.guild.member(aUser).kick(reason);
    message.reply(`<@${aUser.id}> a été kick cause: 3ème Warn, Au bout du 4 ème  warn ban definitivement, reason: ${reason}.`)
  }
  
  /// 4 EME WARN ///
  
  if(warns[aUser.id].warns == 4){
    message.guild.member(aUser).ban(reason);
    message.reply(`<@${aUser.id}> a été ban cause: 4ème Warn, reason: ${reason}.`)
  }
  

}
}); 

