module.exports = {
    top: {
        "type": "flex",
        "altText": "プロ生ちゃんネットショップ",
        "contents": 
        {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://base-ec2if.akamaized.net/w=500,a=0,q=90,u=1/images/item/origin/595d56ed3521bbdef6481c28ca75ea87.png",
                  "size": "full",
                  "aspectMode": "fit",
                  "action": {
                    "type": "uri",
                    "uri": "https://pronama.jp/"
                  }
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "プロ生ちゃんショップへようこそ",
                      "size": "md",
                      "weight": "bold",
                      "align": "center"

                    },
                    {
                        "type": "text",
                        "text": "プロ生ちゃんグッズを販売する",
                        "size": "md",
                        "weight": "bold",
                        "align": "center"
                    },  
                    {
                        "type": "text",
                        "text": "LINE内ショップです！",
                        "size": "md",
                        "weight": "bold",
                        "align": "center"
                    },                       
                    {
                      "type": "text",
                      "text": "次から選択してください",
                      "size": "md",
                      "weight": "bold",
                      "align": "center"
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
                      "style": "link",
                      "action": {
                        "type": "uri",
                        "label": "プロ生ちゃんHP",
                        "uri": "line://app/1619146895-WmAnjgA4"
                      }
                    }
                  ]
                }

        },
        "quickReply": {
          "items": [
              {
                "type": "action", "action": { "type": "message", "label": "トップ", "text": "トップ" }
              },
              {
                  "type": "action", "action": { "type": "message", "label": "商品一覧", "text": "商品一覧" }
              }
            ]
          }
      }
}