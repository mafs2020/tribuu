export interface IUser{
    _id: string,
    role: string,
    language: string[],
    email: string,
    name: string,
    lastname: string,
    currency: {
    code: string,
    name:  string,
    symbol: string
    },
    country: string,
    countryCode: string,
    countryCodeName: string,
    phone: number
}



// "_id": "6027129ae8082843808eaa21",
// "role": "seller",
// "language": [
// "Español",
// "Inglés"
// ],
// "email": "micorreo@gmail.com",
// "name": "Jonh",
// "lastname": "Doe",
// "currency": {
// "code": "MXN",
// "name": "Mexican peso",
// "symbol": "$"
// },
// "country": "Mexico",
// "countryCode": "+52",
// "countryCodeName": "MX",
// "phone": "5555555555"
// }