const handler = async (m, {conn}) => {
  m.reply(global.vendedores);
};
handler.command = /^(vendedores|Vendedores)$/i;
export default handler;

global.vendedores = `
[ 🇪🇬 𝐁𝐥𝐨𝐝𝐢𝐞 𝐁𝐨𝐭 🇪🇬 ]

𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 𝗗𝗲 𝗙𝗮𝗻𝘁𝗮𝘀𝗺𝗶𝗻 𝗕𝗼𝘁👻

𝗢𝘄𝗻𝗲𝗿 : wa.me/51902360712

𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗮 : wa.me/51978420752


𝗦𝗜 𝗧𝗘 𝗩𝗘𝗡𝗗𝗘𝗡 𝗘𝗦𝗧𝗘 𝗕𝗢𝗧 𝗬 𝗧𝗘 𝗘𝗦𝗧𝗔𝗙𝗔𝗡 𝗣𝗘𝗥𝗢 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗔 𝗡𝗢 𝗡𝗢𝗦 𝗛𝗔𝗖𝗘𝗠𝗢𝗦 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗔𝗕𝗟𝗘𝗦 .... 👻
`;
