module.exports = {
  receipt: {
      "type": "flex",
      "altText": "レシート",
      "contents": 
      {
          "type": "bubble",
          "styles": {
            "footer": {
              "separator": true
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "レシート",
                "weight": "bold",
                "color": "#1DB446",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "注文完了",
                "weight": "bold",
                "size": "xxl",
                "margin": "md"
              },
              {
                "type": "text",
                "text": "マイソースファクトリー",
                "size": "xs",
                "color": "#aaaaaa",
                "wrap": true
              },
              {
                "type": "separator",
                "margin": "xxl"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xxl",
                "spacing": "sm",
                "contents": [

                  {
                    "type": "separator",
                    "margin": "xxl"
                  },
                ]
              },
              {
                "type": "separator",
                "margin": "xxl"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "margin": "md",
                "contents": [
                  {
                    "type": "text",
                    "text": "PAYMENT ID",
                    "size": "xs",
                    "color": "#aaaaaa",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "#743289384279",
                    "color": "#aaaaaa",
                    "size": "xs",
                    "align": "end"
                  }
                ]
              }
            ]
          }
        }        
  }
}
