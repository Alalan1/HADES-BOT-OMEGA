import _0x6a469e from'node-fetch';import _0x34c410 from'fs';import _0x47e3cf from'axios';const handler=async(_0x5f4046,{conn:_0x14c51c,text:_0x482c39})=>{if(!_0x482c39)throw'[❗]\x20Enter\x20the\x20name\x20of\x20a\x20spotify\x20song.';try{const _0x3dcf96=await _0x6a469e(global['API']('ApiEmpire','/api/spotifysearch?text='+_0x482c39)),_0x1aa652=await _0x3dcf96['json'](),_0x315b26=_0x1aa652['spty']['resultado'][0x0]['link'],_0x2492d4=await _0x6a469e(global['API']('ApiEmpire','/api/spotifydl?text='+_0x315b26)),_0x312420=await _0x14c51c['getFile'](_0x2492d4['url']),_0x207a6d=await _0x6a469e(global['API']('ApiEmpire','/api/spotifyinfo?text='+_0x315b26)),_0x293dbe=await _0x207a6d['json'](),_0x34da88=_0x293dbe['spty']['resultado'],_0x2c3a57=await(await _0x6a469e(''+_0x34da88['thumbnail']))['buffer']();let _0x20683e='乂✰\x20sᴘᴏᴛɪғʏ\x20✰乂\x0a⇄\x20\x20◁\x20\x20\x20\x20❚❚ㅤ\x20\x20▷ㅤ\x20\x20↻';_0x20683e+='乂✰Qualification\x20:\x20'+_0x34da88['title']+'\x20✰乂\x0a',_0x20683e+='乂✰\x20𝙰𝚁𝚃𝙸𝚂𝚃𝙰:*\x20'+_0x34da88['artist']+'\x20✰乂\x0a',_0x20683e+='乂✰\x20Published:\x20'+_0x34da88['year']+'\x20✰乂\x0a\x0a',await _0x14c51c['sendMessage'](_0x5f4046['chat'],{'text':_0x20683e['trim'](),'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':global['titulowm2'],'containsAutoReply':!![],'mediaType':0x1,'thumbnail':_0x2c3a57,'thumbnailUrl':_0x2c3a57,'mediaUrl':_0x315b26,'sourceUrl':_0x315b26}}},{'quoted':_0x5f4046}),await _0x14c51c['sendMessage'](_0x5f4046['chat'],{'audio':_0x312420['data'],'fileName':_0x34da88['name']+'.mp3','mimetype':'audio/mpeg'},{'quoted':_0x5f4046});}catch(_0x1ff848){console['error'](_0x1ff848);throw'[❗]\x20Error,\x20no\x20results\x20found';}};handler['command']=/^(spotify)$/i,handler['register']=!![],handler['premium']=!![];export default handler;