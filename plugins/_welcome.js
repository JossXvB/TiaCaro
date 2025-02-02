import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => './src/https://telegra.ph/file/32e2f80a9465aee70407e.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let fake = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ *𝑻𝒊𝒂 𝒄𝒂𝒓𝒐 🍓🧸* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Bienvenido a\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
  await conn.Sumi(m.chat, botname, welcome, img, img, canal, fake)
  }
  
  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *𝑻𝒊𝒂 𝒄𝒂𝒓𝒐 🍓🧸* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
  await conn.Sumi(m.chat, botname, bye, img, img, canal, fake)
  }
  
  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *𝑻𝒊𝒂 𝒄𝒂𝒓𝒐 🍓🧸* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
  await conn.Sumi(m.chat, botname, kick, img, img, canal, fake)
  }
}