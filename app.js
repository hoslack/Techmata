const express = require('express');
const app = express();
const mpesa = require('./m-pesa');

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const shortCode = '963775';
const timeStamp = Math.round(Date.now()/1000);
const passKey= '283ba320ca9b3ada6f36c51173a806369ba17b8a0538059ce65809e848d0b906';
const transactionType = 'CustomerPayBillOnline';
const amount = 1;
const partyA = 254723255128;
const partyB = 963775;
const phoneNumber = 254723255128;
const callbackUrl = 'localhost:5000/callback';
const accountRef = 'test123';
const transactionDesc = 'test';


app.get('/send', (req, res)=>{
	//mpesa.Lipa_Na_Mpesa_Online(shortCode, timeStamp, passKey, transactionType, amount, partyA,partyB,phoneNumber,callbackUrl,accountRef,transactionDesc);
	mpesa.O_Auth().then(response =>console.log(response)).catch(err=>console.log(err));
	res.send('Hello world');
});

app.get('/check', (req,res)=>{
	mpesa.Lipa_Na_Mpesa_Query();
	res.send('Hello world');
});




app.listen(port, ()=>{
	console.log(`App listening on http://${host}:${port}`);
});