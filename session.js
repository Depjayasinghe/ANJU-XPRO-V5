//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUwyUktuT2R6enVhR1IyVGdSUCtIQkg2QkFLTVJUbDhHVjdTNXlvSVMxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2x3WURjWTZSM01WOUhySEcrdmpnZnhja1UyY3lWQzFobUV3bEw5ZWRDOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T3FaY3RUd2dWcFIxdXJkaWMrZHJRZEE1OGZhb0JYbUVyNUdmVm9DbDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUTF5cEV1azh5cEZpbTZlOGI2blo3ODUrVDZKLzFETEx6RGFRWmRMSkNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJMXJoMXd1a2ZaUVV3RWJoYkNqQWkrK2JwRDA5eHJYdXYvUGVMU3ZYMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldYZ3ZtaCtxaUJzdWJaMjZtYWVGcHJSMUFHT2M5dzFPbXdxWFdQVWowSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5xRXpQSWc3MVFXN0NJZTYrV3BQRGxoY3A2TmpTSk1rV0hTM2dEa0RrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiay9sVmtnRkxhWEtxUTZyS1BHYk41TG9UK3JlYWcxc3NndjRodFV2REZWMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwvaXRmb3lrSHpSeEVVZGJCaTNiVFJyNzZoU3N6dzlWOERQeERtb05yQUZEUXVUS2VKMTd2ckpqajROblB6a3RaSUl4aGR3K0JRemRIbDhqUU1CT2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IlAvdFFzVVNBaUZieDAwb1BPTjVCSmFucWxzczg2MXZ6VWtWTWJsdmFZeVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikx5VnFTVHZKUjUySjZ1X0FnR2V1R0EiLCJwaG9uZUlkIjoiZjBkYmUyYjktMmVmOS00MDUyLTg0YmMtOGNhZDExNWViNTAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLSEhsTXNDcTNXQ0drM2tKMEdMNzJJcWNKQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0N1lvU0xOQjcvLzZkb2dIaUN2VjVxOHlRcWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVlDNDUyNEIiLCJtZSI6eyJpZCI6Ijk0NzY2Mzc4MTQ4OjM5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngURFRVAgSkFZQVNJTkdIReqngiIsImxpZCI6IjE0MTMzOTQzODEwMDczNDozOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMRGd5TVErN09XeFFZWUpDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBlOUpsbEY1RzNjTERZdE53SnNZQ0VNL1V3UlZYT3dyRGJQdWFtU01uRVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InM0eVNueFIyanNMdlUxM3hFQ1VRT285c3d1OU1iR1FhaXczRitXcWtVa0ZPakxKSGg5aldLbXpmSzNGYnNnQ1UyL1hxM3ljOVlDQnQ1Mk9paVdBNUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrK3UvY0JLZDNDMDh6cGNuYS9aek5zR1hxYUhucUljOStOZzZtYnVDZzdNUWdDc0liYjlMbHdRR0p6eEFzblFYdWxGM3A1dk1kbndGblA5QjdEVDVoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2Mzc4MTQ4OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRIdlNaWlJlUnQzQ3cyTFRjQ2JHQWhEUDFNRVZWenNLdzJ6N21wa2pKeEUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTY4MzMzNywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNOUgifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94766378148",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
