/*
 * @Descripttion: 
 * @version: 
 * @Author: hjy
 * @Date: 2023-12-21 10:15:05
 * @LastEditors: hjy
 * @LastEditTime: 2024-04-02 15:52:39
 */


var game_version = "20240402_08";
function getGameVersion(){
	return game_version;
}

//服务器path

// var server = "https://api.bunnyswap.cc";//外网-sn-正式服务器1(线上正式)
// var wsServer = "wss://wss.bunnyswap.cc";//外网-sn-正式服务器1(线上正式)

var server = "https://api.ghostwargod.com";//外网-s0-正式服务器1(线上测试)
var wsServer = "wss://stream.ghostwargod.com/node1";//外网-s0-正式服务器1(线上测试)


//公网 
// var server = "http://120.53.94.125:9091";//内网-qa-崔服务器 
// var wsServer = "ws://120.53.94.125:10011/node1";//内网-qa-崔服务器


function getServer(){  
	return server;
}
function getWSServer(){  
	return wsServer;
}

var requestTime = 4000;//请求超过4000毫秒，记录
function getRequestTime(){
	return requestTime;
}

var loginTime = 5000;//登录超过5000毫秒，记录
function getLoginTime(){
	return loginTime;
}


// const ClipboardJS = require('clipboard');

function doCopy(str) {
	console.log("doCopy ======" + str);


	// new ClipboardJS(".btn-copy", {
	//   text: function(trigger) {
	// 	return str;
	//   }
	// });



	var clipboard = new ClipboardJS('.btn-copy', {
		text: function(trigger) {
		  return str;
		}
	  });

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });

// clipboard.on('error', function(e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });


	$(".btn-copy").trigger("click");
}

 //====================================================
function decodeCharCode(params){
	b = eval("String.fromCharCode(" + params + ")");;
	return 	b;
}
function compressByt(params){
	var deflate = new Zlib.Deflate(params);
	var compressed = deflate.compress();
	return 	compressed;
}
function decompressByt(params){
	var inflate = new Zlib.Inflate(params);
	var plain = inflate.decompress();

	return plain;
}
function MD5Compress(params){
	var _md5Str=hex_md5(params);
	return _md5Str;
}
