import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 50 
global.db.data.users[m.sender].exp += 50
  
let vn = './media/toxic.mp3'
conn.sendFile(m.chat, vn, 'toxic.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /d20|D20|:(|D020|Terrible|terrible/
handler.command = new RegExp
export default handler


