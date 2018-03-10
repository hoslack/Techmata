

var request = require('request'),
  oauth_token = "ACCESS_TOKEN",
  url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
  auth = "Bearer " + oauth_token;

  request(
    {
      method: 'POST'
      url : url,
      headers : {
        "Authorization" : auth
      },
    json : {
      "BusinessShortCode": " ",
      "Password": " ",
      "Timestamp": " ",
      "TransactionType": "CustomerPayBillOnline",
      "Amount": " ",
      "PartyA": " ",
      "PartyB": " ",
      "PhoneNumber": " ",
      "CallBackURL": "https://ip_address:port/callback",
      "AccountReference": " ",
      "TransactionDesc": " "
    }
  },
    function (error, response, body) {
      // TODO: Use the body object to extract the response
      console.log(body)
    }
  )
