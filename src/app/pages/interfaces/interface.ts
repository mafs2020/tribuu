export interface User extends Country {
    _id: string,
    role: string,
    language: string[],
    email: string,
    name: string,
    lastname: string,
    currency: Currency,
    phone: number
}

export interface Currency{
    code: string,
    name:  string,
    symbol: string
}

export interface Country{
    country: string,
    countryCode: string,
    countryCodeName: string,
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