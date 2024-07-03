const handler = async (m, {conn}) => {
  m.reply(global.Menufff);
};
handler.command = /^(Menuff|ff|comandosff)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Menufff = `
*╔══ ≪ ⚠️ *FREE FIRE* ⚠️ ≫ ══╗*
    *║*
    *║* ≪ PUEDEN USAR LOS ADMINS ≫
    *║*
    *║* ≪ REGLAS , LISTA , FICHA ≫
    *║*
    *║* 💻➺ _${usedPrefix}Fem4_
    *║* 💻➺ _${usedPrefix}Fem6_
    *║* 💻➺ _${usedPrefix}FemInterna4_
    *║* 💻➺ _${usedPrefix}FemInterna6_
    *║* 💻➺ _${usedPrefix}Masc4_
    *║* 💻➺ _${usedPrefix}Masc6_
    *║* 💻➺ _${usedPrefix}MascInterna4_
    *║* 💻➺ _${usedPrefix}MascInterna6_
    *║* 💻➺ _${usedPrefix}Mixto4_
    *║* 💻➺ _${usedPrefix}Mixto6_
    *║* 💻➺ _${usedPrefix}MixtoInterna4_
    *║* 💻➺ _${usedPrefix}MixtoInterna6_
    *║* 💻➺ _${usedPrefix}lista4_
    *║* 💻➺ _${usedPrefix}apos_
    *║* 💻➺ _${usedPrefix}mapa_
    *║* 💻➺ _${usedPrefix}Ficha / Formulario Reclutamiento_
    *║* 💻➺ _${usedPrefix}Nexterra_
    *║* 💻➺ _${usedPrefix}Bermuda_
    *║* 💻➺ _${usedPrefix}Kalahary_
    *║* 💻➺ _${usedPrefix}Alpes_
    *║* 💻➺ _${usedPrefix}AgendaSemanal_
    *╚══ ≪ •❈• ≫ ══╝*

    ╭━〔 ⚔️ *BUSCAR VS PLANTILLAS* 🔱 〕
    *┃➤ 🌀 ${usedPrefix}buscarvsmasc*
    *┃➤ ⚔️ ${usedPrefix}bsmsac*
    *┃➤ ⚓ ${usedPrefix}buscarvsfem*
    *┃➤ ✨ ${usedPrefix}bsfem*
    *┃➤ 📍 ${usedPrefix}buscarvsmixto*
    *┃➤ 👁️‍🗨️ ${usedPrefix}bsmixto*
     ╰━━━━━━━━━━━━

     *╔══ ≪ LINKS DE COMUS/APK Y DRIVES DZN ≫ ══╗*
    *║* 🎐_${usedPrefix}SpamApk / WhatsApp_
    *║* 🎐_${usedPrefix}SpamComu / Comunidades_
    *║* 🎐 _${usedPrefix}Spam2_
    *║* 🎐 _${usedPrefix}rcursosdzn_
    *║* 🎐 _${usedPrefix}drivesdzn_
    *║* 🎐 _${usedPrefix}dzn_
    *║* 🎐 _${usedPrefix}ApkEdits_
    *║* 🎐 _${usedPrefix}DriveEdits_
    *╚══ ≪ •❈• ≫ ══╝*
    
    ╭━〔 ⚠️ *MAPAS* ⚠️ 〕
    *┃➤ 🗺️ ${usedPrefix}bermuda*
    *┃➤ 🗺️ ${usedPrefix}kalahari*
    *┃➤ 🗺️ ${usedPrefix}alpes*
    *┃➤ 🗺️ ${usedPrefix}purgatorio*
    *┃➤ 🗺️ ${usedPrefix}nexterra*
    *┃➤ 📋 ${usedPrefix}agendasemanal*
     ╰━━━━━━━━━━━`;
