import Connector from '../engine/Connector.mjs';

export default class TuMangaOnline extends Connector {

    constructor() {
        super();
        super.id = 'tumangaonline';
        super.label = 'TuMangaOnline';
        this.tags = [ 'manga', 'spanish' ];
        this.url = 'https://tmofans.com';
        this.requestOptions.headers.set('x-referer', this.url);
    }

    async _initializeConnector() {
        let domains = [
            this.url
            //'https://img1.tumangaonline.me'
        ];
        let promises = domains.map( domain => {
            /*
             * sometimes cloudflare bypass will fail, because chrome successfully loads the page from its cache
             * => append random search parameter to avoid caching
             */
            let uri = new URL( domain );
            uri.searchParams.set( 'ts', Date.now() );
            uri.searchParams.set( 'rd', Math.random() );
            let request = new Request( uri.href, this.requestOptions );
            return Engine.Request.fetchUI( request, '', 25000 );
        } );
        return Promise.all( promises );
    }

    async _getMangas() {
        let request = new Request('http://cdn.hakuneko.download/' + this.id + '/mangas.json', this.requestOptions);
        let response = await fetch(request);
        return await response.json();
    }

    async _getChapters(manga) {
        let script = `
            // Deobfuscated source (secret): https://gist.github.com
            var _0x323b=['Il7Ck8O1wqU=','wo84wrDClXk=','TMKCwpXCgyE=','TBtdw5E=','TsKnwqrCpSI=','aMKmwrTCtgQzH8OhwrzDk8ONw5gfw4c=','P8KCfxjCiA==','w57Dm3rCmcOeEw==','w5lgRXZF','w4wkw4oowpkhU8O0T1DDukjDqsO3YcKFBHBSGzrDncOdBRLDi8OIfBB3Zy3DiGYjLcOmwqfDssKlw4TDlVrDunBT','wo9bw68owos=','R0Bzw5JEP8Orw5DDnEI=','woBxWyh/','wqjDpFdnw7ROw6sCTUFnwqbCvj4Lw4LDssOLw4tQbcKIFcOcT8KQwpU9wrvClMKzwoHCjsKJwrRAw4lfJCI6cBDCg3Jmwo4iwq00dMOwFMO/woPCgMOOVMOBw7PCuXHDrUgmw6lk','ccO3w6XDsjY=','YxXCksOhw74JwrfDkMKH','w6vCg8OeHBI=','GcKwYxfCvA==','MjJ9w7bCocKETQNhJUDDscO4WsKCwrPDp8K/MsKEdDt2IlpRw6EbeDjCuQRtwqp2KnrDisOcWAfDgADDn8K4w7/DpS1Rwr5AKMOBdHPDhiEew4g=','fmFzw49P','w4HDqkQYSA==','wprDiVcaw5Y=','XGvCvcOZPg==','wqXDqVI=','wp/DjyvDhcKEw6YNJ8O3JEDCoxU=','w4jDm2DCkQ==','W8Kkw6rCkjzCtcOaw7jChcKfwolGwqI=','wptywpjCgAs=','DmANw4sF','FcKQwrFpw4o=','wpQDwq3DvXs=','wphQN23Ct8OO','Nzh/wrHCrcKC','EFbDpx3DscOU','VMK4KMKGwqY=','BDJLXsK3wrEawpTCtQ==','e2YK','w4Z4Wlw=','wqPDjWbCvA==','w5DCqcO8PCE=','McKMw4EjTA==','Y8O5aMK8VQ==','wqTCliQ=','U8KEG8Kmwqo=','wq/DpUglw7NUw68c','wpRdTzNp','cGLCnMO0Gw==','cW4WwqAnw5PChw==','wqogwqbDsMOc','YsKmwoHCtg==','FcKHw7wN','AyVQWg==','b8KHwobCtjQ=','ZE1Xw6Zj','woAEw44CbA==','w5zDu8KI','wrMhw45C','wrhSwofClw==','fcKjwp3ClyE=','U8KiKMK6woI=','woHDnWkgw7M=','VcK3w78=','W8K6w67CgDvCnsO+w7nChQ==','w4FvwqDDrFo=','w4vDunEdNQ==','UcKyw7w=','w54Pw7vDkBrDgg==','ByJKXw==','w59pWg==','BQhGwo7CkQ==','BsODJDMH','wqQFw545Tw==','JMOuJgwjdA==','EFDDpwHDvsOdNsKHeCY=','wpZCfHUORcKtcsKU','S8KqwqfCnCs=','ZMKBGcKMwoA='];(function(_0x429787,_0x34529a){var _0x2b41bd=function(_0x38c84f){while(--_0x38c84f){_0x429787['push'](_0x429787['shift']());}};_0x2b41bd(++_0x34529a);}(_0x323b,0x1cd));var _0x1691=function(_0x24c8a3,_0xcee48e){_0x24c8a3=_0x24c8a3-0x0;var _0x47fcfa=_0x323b[_0x24c8a3];if(_0x1691['yxlOIO']===undefined){(function(){var _0x28d6a2=function(){var _0x2cbfd4;try{_0x2cbfd4=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x249944){_0x2cbfd4=window;}return _0x2cbfd4;};var _0x1cf390=_0x28d6a2();var _0x2aeab6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1cf390['atob']||(_0x1cf390['atob']=function(_0x148c90){var _0x522a86=String(_0x148c90)['replace'](/=+$/,'');for(var _0x580474=0x0,_0x389b4d,_0x28ee65,_0x4f4e03=0x0,_0x387682='';_0x28ee65=_0x522a86['charAt'](_0x4f4e03++);~_0x28ee65&&(_0x389b4d=_0x580474%0x4?_0x389b4d*0x40+_0x28ee65:_0x28ee65,_0x580474++%0x4)?_0x387682+=String['fromCharCode'](0xff&_0x389b4d>>(-0x2*_0x580474&0x6)):0x0){_0x28ee65=_0x2aeab6['indexOf'](_0x28ee65);}return _0x387682;});}());var _0x4710a1=function(_0x3366f3,_0xcee48e){var _0x4b32c4=[],_0x175e88=0x0,_0x453941,_0x14c5dd='',_0x537c88='';_0x3366f3=atob(_0x3366f3);for(var _0x20110f=0x0,_0x3cba64=_0x3366f3['length'];_0x20110f<_0x3cba64;_0x20110f++){_0x537c88+='%'+('00'+_0x3366f3['charCodeAt'](_0x20110f)['toString'](0x10))['slice'](-0x2);}_0x3366f3=decodeURIComponent(_0x537c88);for(var _0x4abaee=0x0;_0x4abaee<0x100;_0x4abaee++){_0x4b32c4[_0x4abaee]=_0x4abaee;}for(_0x4abaee=0x0;_0x4abaee<0x100;_0x4abaee++){_0x175e88=(_0x175e88+_0x4b32c4[_0x4abaee]+_0xcee48e['charCodeAt'](_0x4abaee%_0xcee48e['length']))%0x100;_0x453941=_0x4b32c4[_0x4abaee];_0x4b32c4[_0x4abaee]=_0x4b32c4[_0x175e88];_0x4b32c4[_0x175e88]=_0x453941;}_0x4abaee=0x0;_0x175e88=0x0;for(var _0x351681=0x0;_0x351681<_0x3366f3['length'];_0x351681++){_0x4abaee=(_0x4abaee+0x1)%0x100;_0x175e88=(_0x175e88+_0x4b32c4[_0x4abaee])%0x100;_0x453941=_0x4b32c4[_0x4abaee];_0x4b32c4[_0x4abaee]=_0x4b32c4[_0x175e88];_0x4b32c4[_0x175e88]=_0x453941;_0x14c5dd+=String['fromCharCode'](_0x3366f3['charCodeAt'](_0x351681)^_0x4b32c4[(_0x4b32c4[_0x4abaee]+_0x4b32c4[_0x175e88])%0x100]);}return _0x14c5dd;};_0x1691['ypzgxI']=_0x4710a1;_0x1691['uLQlUH']={};_0x1691['yxlOIO']=!![];}var _0x4e874d=_0x1691['uLQlUH'][_0x24c8a3];if(_0x4e874d===undefined){if(_0x1691['ToVjLa']===undefined){_0x1691['ToVjLa']=!![];}_0x47fcfa=_0x1691['ypzgxI'](_0x47fcfa,_0xcee48e);_0x1691['uLQlUH'][_0x24c8a3]=_0x47fcfa;}else{_0x47fcfa=_0x4e874d;}return _0x47fcfa;};new Promise(_0x2acd8f=>{var _0x49fd76={};_0x49fd76[_0x1691('0x0','%Wr(')]=function(_0x1b216d,_0x192de1){return _0x1b216d(_0x192de1);};_0x49fd76[_0x1691('0x1','Jrpj')]=function(_0x214583,_0x26941a){return _0x214583(_0x26941a);};_0x49fd76[_0x1691('0x2','VthQ')]=function(_0x372740,_0x495870){return _0x372740===_0x495870;};_0x49fd76[_0x1691('0x3','PWyQ')]=_0x1691('0x4','9O$^');_0x49fd76[_0x1691('0x5','PWyQ')]=_0x1691('0x6','PWyQ');_0x49fd76[_0x1691('0x7','l1#k')]=_0x1691('0x8','G4rK');_0x49fd76[_0x1691('0x9','Z4aW')]=_0x1691('0xa','9Bis');_0x49fd76[_0x1691('0xb','%V$[')]=_0x1691('0xc','C@DD');_0x49fd76[_0x1691('0xd','ZR@x')]=_0x1691('0xe','df%R');_0x49fd76[_0x1691('0xf','mcg^')]=_0x1691('0x10','b1X3');_0x49fd76[_0x1691('0x11','celb')]=function(_0x1e162c,_0x408bc5){return _0x1e162c(_0x408bc5);};_0x49fd76[_0x1691('0x12','l1#k')]=_0x1691('0x13','I3^^');_0x49fd76[_0x1691('0x14','C@DD')]=function(_0x3f943a,_0x4396b5){return _0x3f943a<_0x4396b5;};_0x49fd76[_0x1691('0x15','qxmS')]=function(_0x1106d6,_0x386074){return _0x1106d6+_0x386074;};_0x49fd76[_0x1691('0x16','df%R')]=function(_0x4cd85a,_0x5c0824){return _0x4cd85a+_0x5c0824;};_0x49fd76[_0x1691('0x17','Ody*')]=function(_0x368ede,_0xf22c3c){return _0x368ede(_0xf22c3c);};let _0x5e3bb4={};_0x5e3bb4[_0x1691('0x18','df%R')]=[];let _0x3d3cb6=document[_0x1691('0x19','@uXx')][_0x1691('0x1a','G4rK')](document);document[_0x1691('0x1b','IL1E')]=_0x2d5519=>{var _0x506a79={};_0x506a79[_0x1691('0x1c','eNtD')]=function(_0x5481fc,_0x580580){return _0x49fd76.gkGpa(_0x5481fc,_0x580580);};let _0xf6a773=_0x49fd76[_0x1691('0x1d','Oul)')](_0x3d3cb6,_0x2d5519);if(_0x49fd76[_0x1691('0x1e','f@XI')](_0x2d5519,_0x49fd76[_0x1691('0x1f','VBh9')])){_0xf6a773[_0x1691('0x20','nIzM')]=()=>{let _0x356b3d=new URL(_0xf6a773[_0x1691('0x21','I3^^')]);_0x356b3d[_0x1691('0x22','vmks')]=_0x506a79[_0x1691('0x23','%Wr(')]($,_0xf6a773)[_0x1691('0x24','$R$U')]();_0x5e3bb4[_0x1691('0x25','5EBt')][_0x1691('0x26','Z4aW')](_0x356b3d[_0x1691('0x27','v6h4')]);};}return _0xf6a773;};_0x5e3bb4[_0x49fd76[_0x1691('0x28','celb')]]=[..._0x49fd76[_0x1691('0x29','FW6j')]($,_0x49fd76[_0x1691('0x2a','I%7@')])][_0x1691('0x2b','v0zq')](_0x1c78b6=>{_0x1c78b6=_0x49fd76[_0x1691('0x2c','%Wr(')]($,_0x1c78b6)[_0x1691('0x2d','df%R')]()[_0x1691('0x2e','ZR@x')]();_0x1c78b6[_0x1691('0x2f','Ody*')]();return _0x1c78b6[_0x1691('0x30','5EBt')](_0x49fd76[_0x1691('0x31','6Xe0')])[_0x1691('0x32','PWyQ')]('h4')[_0x1691('0x33','FW6j')]()[_0x1691('0x34','$R$U')]();});_0x5e3bb4[_0x49fd76[_0x1691('0x35','PWyQ')]]=[..._0x49fd76[_0x1691('0x36','C@DD')]($,_0x49fd76[_0x1691('0x37','6RmN')])][_0x1691('0x38','^ffF')](_0x2fce07=>_0x2fce07[_0x1691('0x39','bIF4')][_0x1691('0x3a','eNtD')]());_0x5e3bb4[_0x49fd76[_0x1691('0x3b','PWyQ')]]=[..._0x49fd76[_0x1691('0x3c','%Wr(')]($,_0x49fd76[_0x1691('0x3d','df%R')])][_0x1691('0x3e','IL1E')](_0x48025e=>_0x48025e[_0x1691('0x3f','IL1E')][_0x1691('0x40','PNqM')](/flag-icon-([a-z]+)/)[0x1]);let _0x2ccdae=[];for(let _0x273aef=0x0;_0x49fd76[_0x1691('0x41','CeSP')](_0x273aef,_0x5e3bb4[_0x1691('0x42','IL1E')][_0x1691('0x43','5Y)#')]);_0x273aef++){_0x2ccdae[_0x1691('0x44','$R$U')]({'id':_0x5e3bb4[_0x1691('0x45','Z4aW')][_0x273aef],'title':_0x49fd76[_0x1691('0x46','I3^^')](_0x49fd76[_0x1691('0x47','S5YF')](_0x49fd76[_0x1691('0x48','6RmN')](_0x5e3bb4[_0x1691('0x49','S5YF')][_0x273aef],'\x20['),_0x5e3bb4[_0x1691('0x4a','vmks')][_0x273aef]),']'),'language':_0x5e3bb4[_0x1691('0x4b','z0Z(')][_0x273aef]});}_0x49fd76[_0x1691('0x4c','PWyQ')](_0x2acd8f,_0x2ccdae);});
        `;
        let request = new Request(this.url + manga.id, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        data.forEach(chapter => chapter.id = this.getRootRelativeOrAbsoluteLink(chapter.id, request.url));
        return data;
    }

    async _getPages(chapter) {
        let script = `
            window['uri'] = new URL('${chapter.id}', '${this.url}');
            // Deobfuscated source (secret): https://gist.github.com
            var _0x1d93=['eMKdw4zDm2c=','I2R3woJK','w7gxb8OK','ecKtaMK6wqM=','w7HDqsOY','acOaQw==','U8OLMcKWXQ==','WxPCkRTDhA==','AU9tw5lkwpDDvxUIKsKhw4Q7worDiB/DqcKEasO9f8K3I2MYZ34Gw6DCjS/Cjy/CscK7VMKFX8O0V8O/wq8VW0jDnh5UaHJ8IVo2FsOYw7/DkMK/W8OBwqoWaw==','wptab8O2wp8=','Jwx4w5U8','woLDnMOtwr/DscK5M8KUb8K9AQhCw6Qxw5xnwp/Cl8OcwpDCqsOQw7rDvEVG','LsO6cyrDhA==','wpkpNzPDsg==','fXYiw5kT','b8OaSQ==','N0Mhw4DDrw==','JHl3Ow==','dcKaSMKf','TDPCtSXDlsOQ','d3wBw6Mj','dnwYw5c=','wq3Cm8K2wonCkQ==','AFxmAcKZ','CUN1wp1mwpE=','eMKRw48=','w7PCmyZ1','w4FOA8KKXA==','w7HClRcUw6w=','fnrCrUA=','dFAzw7Ak','axPClA==','w6/DucOL'];(function(_0x11f143,_0x4b7ec6){var _0x2be202=function(_0x14903c){while(--_0x14903c){_0x11f143['push'](_0x11f143['shift']());}};_0x2be202(++_0x4b7ec6);}(_0x1d93,0x1b3));var _0x4d12=function(_0x57280a,_0xef50a4){_0x57280a=_0x57280a-0x0;var _0x245ae6=_0x1d93[_0x57280a];if(_0x4d12['EWGeuV']===undefined){(function(){var _0x3383bc;try{var _0x5c1fba=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3383bc=_0x5c1fba();}catch(_0x5e9843){_0x3383bc=window;}var _0x14c408='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3383bc['atob']||(_0x3383bc['atob']=function(_0x17125b){var _0x592882=String(_0x17125b)['replace'](/=+$/,'');for(var _0x35d32f=0x0,_0x35f397,_0x4e0390,_0x2f7e41=0x0,_0x2f6ce6='';_0x4e0390=_0x592882['charAt'](_0x2f7e41++);~_0x4e0390&&(_0x35f397=_0x35d32f%0x4?_0x35f397*0x40+_0x4e0390:_0x4e0390,_0x35d32f++%0x4)?_0x2f6ce6+=String['fromCharCode'](0xff&_0x35f397>>(-0x2*_0x35d32f&0x6)):0x0){_0x4e0390=_0x14c408['indexOf'](_0x4e0390);}return _0x2f6ce6;});}());var _0x284f6d=function(_0x465a8e,_0xef50a4){var _0x2dd3c9=[],_0x2e92f5=0x0,_0xd76219,_0x375390='',_0x244934='';_0x465a8e=atob(_0x465a8e);for(var _0x41f653=0x0,_0x3f81b5=_0x465a8e['length'];_0x41f653<_0x3f81b5;_0x41f653++){_0x244934+='%'+('00'+_0x465a8e['charCodeAt'](_0x41f653)['toString'](0x10))['slice'](-0x2);}_0x465a8e=decodeURIComponent(_0x244934);for(var _0x4c0e63=0x0;_0x4c0e63<0x100;_0x4c0e63++){_0x2dd3c9[_0x4c0e63]=_0x4c0e63;}for(_0x4c0e63=0x0;_0x4c0e63<0x100;_0x4c0e63++){_0x2e92f5=(_0x2e92f5+_0x2dd3c9[_0x4c0e63]+_0xef50a4['charCodeAt'](_0x4c0e63%_0xef50a4['length']))%0x100;_0xd76219=_0x2dd3c9[_0x4c0e63];_0x2dd3c9[_0x4c0e63]=_0x2dd3c9[_0x2e92f5];_0x2dd3c9[_0x2e92f5]=_0xd76219;}_0x4c0e63=0x0;_0x2e92f5=0x0;for(var _0x99fd2=0x0;_0x99fd2<_0x465a8e['length'];_0x99fd2++){_0x4c0e63=(_0x4c0e63+0x1)%0x100;_0x2e92f5=(_0x2e92f5+_0x2dd3c9[_0x4c0e63])%0x100;_0xd76219=_0x2dd3c9[_0x4c0e63];_0x2dd3c9[_0x4c0e63]=_0x2dd3c9[_0x2e92f5];_0x2dd3c9[_0x2e92f5]=_0xd76219;_0x375390+=String['fromCharCode'](_0x465a8e['charCodeAt'](_0x99fd2)^_0x2dd3c9[(_0x2dd3c9[_0x4c0e63]+_0x2dd3c9[_0x2e92f5])%0x100]);}return _0x375390;};_0x4d12['TdZRln']=_0x284f6d;_0x4d12['NZZfti']={};_0x4d12['EWGeuV']=!![];}var _0x3d4f70=_0x4d12['NZZfti'][_0x57280a];if(_0x3d4f70===undefined){if(_0x4d12['ptIhgy']===undefined){_0x4d12['ptIhgy']=!![];}_0x245ae6=_0x4d12['TdZRln'](_0x245ae6,_0xef50a4);_0x4d12['NZZfti'][_0x57280a]=_0x245ae6;}else{_0x245ae6=_0x3d4f70;}return _0x245ae6;};new Promise(_0x5e9874=>{var _0x15a9b9={};_0x15a9b9[_0x4d12('0x0','Rhd#')]=function(_0x262052,_0x209edd){return _0x262052(_0x209edd);};_0x15a9b9[_0x4d12('0x1','Kd9W')]=_0x4d12('0x2','lSMD');_0x15a9b9[_0x4d12('0x3','zzsA')]=function(_0x467189,_0xc5bbb8){return _0x467189(_0xc5bbb8);};_0x15a9b9[_0x4d12('0x4','AOOR')]=_0x4d12('0x5','!H@q');_0x15a9b9[_0x4d12('0x6','#gOo')]=function(_0x6fa15e,_0x4f5eb2){return _0x6fa15e>_0x4f5eb2;};_0x15a9b9[_0x4d12('0x7','#1ac')]=function(_0x45cf20,_0x96ab70){return _0x45cf20(_0x96ab70);};_0x15a9b9[_0x4d12('0x8','xdHu')]=_0x4d12('0x9','ANiv');let _0x13e34f=window[_0x15a9b9[_0x4d12('0xa','f)6y')]];$[_0x4d12('0xb','ygV7')](_0x13e34f[_0x4d12('0xc','qY#G')],_0x13e34f[_0x4d12('0xd','Kd9W')],_0xda0b90=>{let _0x436bf2=_0x15a9b9[_0x4d12('0xe','xdHu')]($,_0xda0b90)[_0x4d12('0xf','xdHu')](_0x15a9b9[_0x4d12('0x10','PYrE')]);if(_0x15a9b9[_0x4d12('0x11','ygV7')](_0x436bf2[_0x4d12('0x12','lSMD')],0x0)){$[_0x4d12('0x13','h*vI')](_0x436bf2[0x0][_0x4d12('0x14','1kVe')],_0xda0b90=>{_0x15a9b9[_0x4d12('0x15','^VLV')](_0x5e9874,[..._0x15a9b9[_0x4d12('0x16','@1GQ')]($,_0xda0b90)[_0x4d12('0x17','TAJ7')](_0x15a9b9[_0x4d12('0x18','xdHu')])][_0x4d12('0x19','PjFi')](_0x1951aa=>_0x1951aa[_0x4d12('0x1a','sjX#')]));});}else{_0x15a9b9[_0x4d12('0x1b','h*vI')](_0x5e9874,[..._0x15a9b9[_0x4d12('0x1c','lSMD')]($,_0xda0b90)[_0x4d12('0x1d','s4J)')](_0x15a9b9[_0x4d12('0x1e','qY#G')])][_0x4d12('0x1f','sjX#')](_0x31f6b9=>_0x31f6b9[_0x4d12('0x20','ANiv')]));}});});
        `;
        let request = new Request(this.url + chapter.manga.id, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return data.map(img => this.createConnectorURI({
            url: this.getAbsolutePath(img, request.url),
            referer: request.url
        }));
    }

    _handleConnectorURI( payload ) {
        /*
         * TODO: only perform requests when from download manager
         * or when from browser for preview and selected chapter matches
         */
        this.requestOptions.headers.set( 'x-referer', payload.referer );
        let promise = super._handleConnectorURI( payload.url );
        this.requestOptions.headers.delete( 'x-referer' );
        return promise;
    }
}