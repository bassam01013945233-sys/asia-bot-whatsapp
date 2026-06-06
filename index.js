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
  // المالك 1
    { name: "3QAB-AS", lid: "52429437595728@lid", jid: "201142182793@s.whatsapp.net" },
  // يمكنك إضافة مالكين آخرين هنا
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== قاعدة البيانات ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== الإعدادات ========== */
const { config } = client;
config.info = { 
  nameBot: "♡ اسيا v1 🎪 〈", 
  nameChannel: "اسيا v1", 
  idChannel: "120363426553571462@newsletter",
  urls: {
    repo: "https://github.com/bassam01013945233-sys/asia-bot-whatsapp",
    api: "https://emam-api.web.id",
    group: "https://chat.whatsapp.com/B8kEK01jpzN3z61uv2OrMp",
    channel: "https://whatsapp.com/channel/0029VbD2pIvFXUuVFTTsek0J"
  },
  copyright: { 
    pack: 'اسيا v1', 
    author: '3QAB-AS'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== بدء التشغيل ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== معالجة الأخطاء ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('❌ رفض غير معالج:', err)
});


/* 
=========== مراقب الذاكرة ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 ذاكرة البوت ممتلئة (${used.toFixed(1)}MB), إعادة تشغيل...`)
        process.exit(1) 
    }
}, 300_000) 

*/