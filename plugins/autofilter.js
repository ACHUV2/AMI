const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = ".GUD MRNGZZ💙🖇️"

const GN = ".GUD NYT 💙🖤"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'Achu', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "𝙸 𝙺𝚗𝚘𝚠 𝙷𝚎 𝙸𝚜 𝙼𝚢 𝙾𝚠𝚗𝚎𝚛";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'ameen', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "HE IS A POTTAn";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'Achu', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "𝙸 𝙺𝚗𝚘𝚠 𝙷𝚎 𝙸𝚜 𝙼𝚢 𝙲𝚛𝚎𝚊𝚝𝚘𝚛🥰";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'rafi', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "Atharra😏";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    

                asena.addCommand({pattern: 'Ami', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                    var r_text = new Array ();

                    r_text[1] = "𝚈𝚎𝚜 𝚃𝚎𝚕𝚕 𝙼𝚎 𝙷𝚘𝚠 𝙲𝚊𝚗 𝙸 𝙷𝚎𝚕𝚙 𝚈𝚘𝚞";

                    var i = Math.floor(2*Math.random())

                    await message.client.sendMessage(

                        message.jid,(r_text[i]), MessageType.text);

                    }));


}
