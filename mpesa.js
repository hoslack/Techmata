const rp = require('request-promise');
const base64 = require('base-64');

//Object mpesa used to encapsulate all M-Pesa API for easier calling of each method e.g (mpesa.B2C(<arguments>))

let mpesa = {
	O_Auth() {
		const consumer_key = 'lBQ112RlkrRxhOhgQF4p8kwsjG4iT15g';
		const consumer_secret = 'zRAsURFooz6R0QlA';
		//const auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");
		const auth = base64.encode(consumer_key + ':' + consumer_secret);
		let options = {
			//uri: "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
			uri: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
			headers: {
				'Authorization': auth
			},
			json: true
		};
		// return all the options needed for an oauth call for use in every API call
		return rp(options);
	},
	Lipa_Na_Mpesa_Online(short_code, time_stamp, pass_key, transactionType, amount, partyA, partyB, phoneNumber, callbackUrl, accountRef, transactionDesc) {
		this.O_Auth().then(response => {
			console.log('ACCESS', response);
			let accessToken = response.access_token;
			// let password = new Buffer(short_code + pass_key + time_stamp).toString("base64");
			let password = base64.encode(short_code + pass_key + time_stamp);
			let options = {
				method: 'POST',
				//uri: 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
				uri: 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
				headers: {
					'Authorization': 'Bearer ' + accessToken,
					'Content-Type': 'application/json'
				},
				body: {
					'BusinessShortCode': short_code,
					'Password': password,
					'Timestamp': time_stamp,
					'TransactionType': transactionType,
					'Amount': amount,
					'PartyA': partyA,
					'PartyB': partyB,
					'PhoneNumber': phoneNumber,
					'CallBackURL': callbackUrl,
					'AccountReference': accountRef,
					'TransactionDesc': transactionDesc
				},
				json: true
			};
      
			rp(options)
				.then((body) =>{
					console.log(body);
				})
				.catch((err)=> {
					//console.log(err);
				});
		}).catch(error => console.log(error));
	},
	Lipa_Na_Mpesa_Query(short_code, time_stamp, pass_key, checkoutRequestId) {
		this.O_Auth().then(response => {
			let accessToken = response.access_token;
			//let password = new Buffer(short_code + pass_key + time_stamp).toString("base64");
			let password = base64.encode(short_code + pass_key + time_stamp);
			let options = {
				method: 'POST',
				//uri: 'https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query',
				uri: 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
				headers: {
					'Authorization': 'Bearer ' + accessToken,
					'Content-Type': 'application/json'
				},
				body: {
					'BusinessShortCode': short_code,
					'Password': password,
					'Timestamp': time_stamp,
					'CheckoutRequestID': checkoutRequestId
				},
				json: true
			};
      
			rp(options)
				.then((body)=> {
					console.log(body);
				})
				.catch((err)=> {
					console.log(err);
				});
		}).catch(error => console.log(error));
	}
};

module.exports = mpesa;