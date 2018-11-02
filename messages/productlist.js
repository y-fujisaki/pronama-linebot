module.exports = {
    productlist: {
        "type": "flex",
        "altText": "商品一覧",
        "contents": 
        {
            "type": "carousel",
            "contents": [
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "size": "full",
                  "aspectMode": "fit",
                  "url":"https://base-ec2.akamaized.net/images/item/origin/595d56ed3521bbdef6481c28ca75ea87.png"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "［屋外OK］ 901Kロゴステッカー",
                      "wrap": true,
                      "weight": "bold",
                      "size": "xl"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "¥540",
                          "wrap": true,
                          "weight": "bold",
                          "size": "xl",
                          "flex": 0
                        }
                      ]
                    }  
                ]
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "button",
                      "style": "primary",
                      "action": {
                        "type": "postback",
                        "label": "LINE Payで支払う",
                        "data": "action=buy&id=1&productName=［屋外OK］ 901Kロゴステッカー&amount=540"
                      },

                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "size": "full",
                  "aspectMode": "cover",
                  "url": "https://base-ec2.akamaized.net/images/item/origin/9886dbd76e89bb96469a76a4299502ca.png"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "プロ生ちゃん本",
                      "wrap": true,
                      "weight": "bold",
                      "size": "xl"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "flex": 1,
                      "contents": [
                        {
                          "type": "text",
                          "text": "¥1,000",
                          "wrap": true,
                          "weight": "bold",
                          "size": "xl",
                          "flex": 0
                        }
                      ]
                    }
                  ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "style": "primary",
                        "action": {
                          "type": "postback",
                          "label": "LINE Payで支払う",
                          "data": "action=buy&id=1&productName=プロ生ちゃん本&amount=1000"
                        }                      
                      }  
                  ]
                }
              }
            ]
          }
      }           
  }
