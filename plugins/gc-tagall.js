const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `𝗛𝗼𝗹𝗮 𝗙𝗮𝗻𝘀𝗶𝘁𝗼 𝗬𝗮 𝗟𝗲𝘃𝗮𝗻𝘁𝗮𝘁𝗲 𝗘𝘀 𝗛𝗼𝗿𝗮 𝗛𝗱𝗽🌱\n\n${oi}\n`;
  for (const mem of participants) {
    teks += `ִ໋🇪🇬 @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 〔 𝐁𝐥𝐨𝐝𝐢𝐞 𝐁𝐨𝐭 〕`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
