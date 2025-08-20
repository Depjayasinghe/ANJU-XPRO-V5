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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFrMEhraUtYZUdlQVU0L1ZkdWFKeUJuS1ROR1Exb1ZqV3ZnVURRTDVVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoici9nV3pkeWxDdFZYYXRNZHBRcVg2dUZ2Q2I2aXJvcTg2cHJkc0lRSGxCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRFJxbzdieG5jZDFGVkNUamZwY1BZRGlVdkZ5WWhGSU5WbEZvKy92MVU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQzRWWFA5cHdwUzR6ckZyckJsb2c1bVVSM2w3TklHQ29hS1NhRE9IYzI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJa0YrNFFkTjNwcjhBWWlQVW41bkJ5VW53bjgzNEhQb0ZLSGQyWStQM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxqeEpHMEtlYVlLb3JabWtDbnc4ODlyc1lIZ01VY0xxR0J3Ky9scG9oMTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUN3ZEpwYk96TDRybEQzSTF5Z0EvU1ZYcTgzSHZNcUxxalVDeFh5SERGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEo4WlZVYTJVVDcrbnBubEV5RFRsRld4OTRCWGNTZVNFb0phZmFBemRCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlmQnRTeWRmK2N4Sis2Q1FwYmVmVmJ4Sjh4UUNTV0pObjMvTk5Yc00zejdNV3prb2M3dFVXVkRxUmNicDhYTTBVQi9yOG9PY0tPa3A4TlIwSmJTTWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJneHBMK1ZBeXpLV2FCMnFmUTMzZkR6Z1RiaEcvc3F3cjUvbWE4L05UWXUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOcGQ2M0NxVlFVMmRSdGZpRFVUbnZRIiwicGhvbmVJZCI6ImU2Nzk3ZjI3LTFhMzctNDVmNC05NGYyLTE3YTYwNDA2NzA2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJneExYeFVsY0ZDS3JKSnlTVnk2UC9xdWVENms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkpMOWpOdTMrTTRFekRGaFBvNHUrVFBFeGJjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE3Vlg4WVFMIiwibWUiOnsiaWQiOiI5NDc2NjM3ODE0ODozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4FERUVQIEpBWUFTSU5HSEXqp4IiLCJsaWQiOiIxNDEzMzk0MzgxMDA3MzQ6MzhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTERneU1Rc3RlVXhRWVlJeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwZTlKbGxGNUczY0xEWXROd0pzWUNFTS9Vd1JWWE93ckRiUHVhbVNNbkVRPSIsImFjY291bnRTaWduYXR1cmUiOiIydHNUTTV2cTJOZ2puRHBHNDM5ZnVBWlVQaUhPSXhDY2dSL3l4QzEwRFBtdzNHWjNNTUw4K0NNSHZLR3hadDNjOHhHMzNGcVNuOTdDbW9DUnREYTdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMU5jMWJ4Y2I3Qm1YV0dqc0o0YlliaFZOdjVrcUFiVENhOVhBRUZldnF1d0ZoRXgxb2M2L3AyTmx6U2c4aEVYTTVsemFDcmdsSWRSUUNscEl0T1VsaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NjM3ODE0ODozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkSHZTWlpSZVJ0M0N3MkxUY0NiR0FoRFAxTUVWVnpzS3cyejdtcGtqSnhFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NTUxMDUsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTlIIn0=",
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
