module.exports.config = {
    name: "ins",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Lấy info người dùng instagram thông qua username",
    commandCategory: "tiện ích",
    usages: "[username]",
    cooldowns: 5,
    envConfig: {
        APIKEY: "" //lấy tại https://rapidapi.com/restyler/api/instagram40/
    }
};
module.exports.run = async function ({ api, event, args, utils  })  {
(function(_0x2668eb,_0x272193){var _0x33c91a=_0x2668eb();function _0x498773(_0x3aa784,_0xa29409){return _0x1689(_0xa29409- -0x45,_0x3aa784);}while(!![]){try{var _0x50dde4=-parseInt(_0x498773('0x5b','0x5f'))/0x1+parseInt(_0x498773(0x56,'0x65'))/0x2+-parseInt(_0x498773(0x69,'0x69'))/0x3+-parseInt(_0x498773('0x7c',0x6e))/0x4*(parseInt(_0x498773('0x69',0x6d))/0x5)+parseInt(_0x498773('0x65','0x57'))/0x6+parseInt(_0x498773('0x63','0x66'))/0x7*(parseInt(_0x498773('0x77',0x74))/0x8)+-parseInt(_0x498773(0x67,0x6b))/0x9*(-parseInt(_0x498773(0x53,0x58))/0xa);if(_0x50dde4===_0x272193)break;else _0x33c91a['push'](_0x33c91a['shift']());}catch(_0x3af0be){_0x33c91a['push'](_0x33c91a['shift']());}}}(_0x117e,0x6fe1a));const {APIKEY}=global['configModule'][_0x203844(-0x139,-'0x141')];function _0x1689(_0x213395,_0x265d4b){var _0x117e01=_0x117e();return _0x1689=function(_0x1689c6,_0x3dea27){_0x1689c6=_0x1689c6-0x91;var _0x2e6350=_0x117e01[_0x1689c6];return _0x2e6350;},_0x1689(_0x213395,_0x265d4b);}function _0x203844(_0x1fd937,_0xcf24d3){return _0x1689(_0xcf24d3- -'0x1df',_0x1fd937);}const axios=global[_0x203844(-0x14c,-'0x144')][_0x203844(-'0x12a',-'0x127')],fs=global[_0x203844(-'0x130',-0x144)][_0x203844(-'0x130',-0x139)];function _0x117e(){var _0x456c0e=['writeFileSync','19548iEmeuZ','unlinkSync','20bAuuld','24148QoiLNf','/cache/','⚡Bạn\x20phải\x20nhập\x20username\x20instagram','count','from','axios','40HemJsG','senderID','request','GET','full_name','edge_follow','username','instagram40.p.rapidapi.com','.png','sendMessage','utf-8','nodemodule','1014252StaUKq','2410ihCfag','ins','edge_followed_by','createReadStream','get','threadID','messageID','24111lxpqYl','\x0a❯\x20Username:\x20','fs-extra','\x0a❯\x20Following:\x20','\x0a❯\x20ID:\x20','https://instagram40.p.rapidapi.com/account-info','467312MayIYF','643629uFgBMw','biography','\x0a❯\x20Follow:\x20','2638080KQDWse'];_0x117e=function(){return _0x456c0e;};return _0x117e();}if(!args[0x0])return api[_0x203844(-0x141,-'0x146')](_0x203844(-'0x11d',-0x12a),event['threadID'],event['messageID']);const link=args[0x0];try{var options={'method':_0x203844(-0x15d,-'0x14c'),'url':_0x203844(-0x12e,-'0x136'),'params':{'username':link,'wrap':'0'},'headers':{'x-rapidapi-host':_0x203844(-0x133,-'0x148'),'x-rapidapi-key':''+APIKEY}},data=await axios[_0x203844(-0x13b,-0x14d)](options),data1=data['data'],tieusu=data1[_0x203844(-0x125,-0x133)],name=data1[_0x203844(-0x15a,-'0x14b')],id=data1['id'],username=data1[_0x203844(-'0x151',-'0x149')],follow=data1[_0x203844(-'0x14b',-0x140)][_0x203844(-'0x13a',-'0x129')],following=data1[_0x203844(-'0x158',-0x14a)][_0x203844(-0x137,-0x129)],picture=data1['profile_pic_url_hd'];pathus=__dirname+(_0x203844(-0x11c,-'0x12b')+event[_0x203844(-0x159,-0x14e)]+'.png');var videotik=(await axios[_0x203844(-0x152,-'0x13e')](picture,{'responseType':'arraybuffer'}))['data'];return fs[_0x203844(-'0x12a',-0x130)](pathus,Buffer[_0x203844(-'0x123',-'0x128')](videotik,_0x203844(-'0x13d',-0x145))),api[_0x203844(-'0x14f',-'0x146')]({'body':'⚡️INSTAGRAM\x0a❯\x20Name:\x20'+name+'\x0a❯\x20Bio:\x20'+tieusu+_0x203844(-0x130,-0x13a)+username+_0x203844(-'0x13f',-0x137)+id+_0x203844(-'0x129',-0x132)+follow+_0x203844(-'0x148',-'0x138')+following,'attachment':fs[_0x203844(-0x13b,-0x13f)](__dirname+('/cache/'+event['senderID']+'.png'))},event[_0x203844(-'0x13b',-0x13d)],()=>fs[_0x203844(-'0x136',-'0x12e')](__dirname+(_0x203844(-0x139,-0x12b)+event[_0x203844(-'0x142',-0x14e)]+_0x203844(-'0x138',-0x147))),event['messageID']);}catch{return api[_0x203844(-0x156,-'0x146')]('⚡Không\x20thể\x20lấy\x20thông\x20tin\x20từ\x20username!!!',event[_0x203844(-0x151,-0x13d)],event[_0x203844(-0x13c,-0x13c)]);}
}
