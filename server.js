'use strict';

//express(フレームワーク)+node.js　での実装例

//expressフレームワークの読み込み
const express = require('express');

//LINE SDKの読み込み
const line = require('@line/bot-sdk');
// 商品選択のFlex MessagesのJSON読み込み
const top = require('./messages/top');
// 商品一覧のFlex MessagesのJSON読み込み
const productlist = require('./messages/productlist');

// レシートのFlex MessagesのJSON読み込み
const receipt = require('./messages/receipt');

// LINE Pay関連のコード読み込み
const pay = require('./pay');

//クエリ文字列をオブジェクト形式に変換してくれるライブラリの読み込み
const queryString = require('querystring');

// 環境変数を扱うdotenvの読み込み
require('dotenv').config();

// WebサーバのPORT
const PORT = process.env.PORT || 3000;


// messaging APIの接続で利用するSecretとAccess Tokenを.envからセット
const config = {
	    channelSecret: process.env.CHANNEL_SECRET,
	    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};

const app = express();

// LINEBotとやりとりするAPI。イベントの取得とにメッセージの送信
app.post('/webhook', line.middleware(config), (req, res) => {
	    Promise
	      .all(req.body.events.map(handleEvent))
	      .then((result) => res.json(result));
});


const client = new line.Client(config);

// イベントのハンドル
function handleEvent(event) {
	if (event.type === 'postback') { //event.typeがpostbackだったときの処理(LINE Payで利用)
		const data = queryString.parse(event.postback.data);
		//console.log({data: data})
		return pay.reserve(event, data.productName, data.amount);
	}	
	if (event.type !== 'message') { //postback、message以外がきたらnullにする
		return Promise.resolve(null);
	}

	//event.typeがmessageだったときの処理
		//リプライメッセージを受け取ったときの挙動
		if (event.message.text == 'トップ'){
			const message = [
				top.top
			]
			return client.replyMessage(event.replyToken,message);	
		}else if (event.message.text == '商品一覧'){
			return client.replyMessage(event.replyToken, productlist.productlist);
		}
		//指定のメッセージ以外はオウム返しする
		return client.replyMessage(event.replyToken, {
			type: 'text',
			text: event.message.text
		});
	
}

// LINE payの処理結果を受け取るAPI
app.get("/pay/confirm", (req, res, next) => {
	console.log('called confirm path')

	if (!req.query.transactionId){
  		console.log("Transaction Id not found.");
  		return res.status(400).send("Transaction Id not found.");
	}
	pay.confirm(req.query.transactionId);
})

//  listen()メソッドを実行して待ち受けする
app.listen(PORT);
console.log(`Server running at ${PORT}`);