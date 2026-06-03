import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201142182793', // رقم البوت
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [
    { name: "3QAB", lid: "515", jid: "301142182793@s.whatsapp.net" },
    { name: "3QAB", lid: "515", jid: "301142182793@s.whatsapp.net" },
    { name: "3QAB", lid: "515", jid: "301142182793@s.whatsapp.net" },
    { name: "3QAB", lid: "515", jid: "301142182793@s.whatsapp.net" }
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "𝑨𝒔𝒊𝒂 𝑽1", 
  nameChannel: "𝑨𝒔𝒊𝒂 𝑽1", 
  idChannel: "120363426553571462@newsletter",
  urls: {
    repo: "https://github.com/3QAB-515/asia-bot-whatsapp",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029VbD2pIvFXUuVFTTsek0J"
  },
  copyright: { 
    pack: '𝑨𝒔𝒊𝒂 𝑽1', 
    author: '3QAB'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
  if (client.commandSystem) { 
    sub(client)
  }
}, 2000);

/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});
