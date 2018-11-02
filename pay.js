const uuid = require("uuid/v4");
const cache = require("memory-cache");


// for line pay
const line_pay = require("line-pay");
const pay = new line_pay({
    channelId: process.env.LINE_PAY_CHANNEL_ID,
    channelSecret: process.env.LINE_PAY_CHANNEL_SECRET,
    hostname: process.env.LINE_PAY_HOSTNAME,
    isSandbox: true
})

// for line bot
const line = require('@line/bot-sdk');
const config = {
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};
const client = new line.Client(config);

module.exports = {
    reserve: (event, item, amount) => {
        let reservation = {
          productName: item,
          amount: amount,
          currency: "JPY",
          orderId: uuid(),
          confirmUrl: process.env.LINE_PAY_CONFIRM_URL,
          confirmUrlType: "SERVER"
        }
    
        pay.reserve(reservation).then((response) => {
            reservation.transactionId = response.info.transactionId;
            reservation.userId = event.source.userId;
    
            // Save transaction information to cache
            cache.put(response.info.transactionId, reservation);
    
            const message = {
                type: "template",
                altText: `${item}を購入するには下記のボタンで決済に進んでください`,
                template: {
                    type: "buttons",
                    text: `${item}を購入するには下記のボタンで決済に進んでください`,
                    actions: [
                        {type: "uri", label: "LINE Payで決済", uri: response.info.paymentUrl.web},
                    ]
                }
            }
            return client.replyMessage(event.replyToken, message);

        });
      },
      confirm: (transactionId) => {
        console.log('called confirm')
        // Restore data from cache 
        const reservation = cache.get(transactionId);
        if (!reservation){
            console.log("Reservation not found.");
            return res.status(400).send("Reservation not found.")
        }
    
        console.log(`Restore data from cache.`);
        console.log(reservation);
    
        const confirmation = {
            transactionId: transactionId,
            amount: reservation.amount,
            currency: reservation.currency
        }
    
        // Finished transaction
        return pay.confirm(confirmation).then((response) => {
            const messages = [{
                type: "sticker",
                packageId: 2,
                stickerId: 516
            },
            {
                type: "text",
                text: `ありがとうございます、${reservation.productName}の決済が完了しました。`
            }                      
        ]
            return client.pushMessage(reservation.userId, messages);

        });        
      }
}
