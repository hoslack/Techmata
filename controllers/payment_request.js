const request = require('request');

module.exports = (req, res)=>{
  
  const oauth_token = "ACCESS_TOKEN";
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const auth = "Bearer " + oauth_token;
  const PASSKEY = '283ba320ca9b3ada6f36c51173a806369ba17b8a0538059ce65809e848d0b906';



  request(
    {
      method: 'POST'
      url : url,
      headers : {
        "Authorization" : auth
      },
    json : {
      "BusinessShortCode": "963775",
      "Password": " ",
      "Timestamp": " ",
      "TransactionType": "CustomerPayBillOnline",
      "Amount": " ",
      "PartyA": " ",
      "PartyB": " ",
      "PhoneNumber": "0723255128",
      "CallBackURL": "https://ip_address:port/callback",
      "AccountReference": " ",
      "TransactionDesc": " "
    }
  },
     (error, response, body)=> {
      // TODO: Use the body object to extract the response
      console.log(body)
    }
  )}
