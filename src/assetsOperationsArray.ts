type MainStatus = {
  message: string;
  status: number;
};

export type ApiEndpoint = {
  method: string;
  endpoint: string;
  token: boolean;
  operationGoal: string;
  requestBody: string;
  requestBodySchema: string;
  requestBodyType: string;
  responseBody: string;
  responseBodySchema: string;
  mainStatuses: MainStatus[];
};

export const assetsOperationArray: ApiEndpoint[] = [
  {
    method: "GET",
    endpoint: "/assets",
    operationGoal: "Get all user assets",
    token: true,
    requestBodyType: "No Body",
    requestBody: `No need Body`,
    requestBodySchema: `No schema`,
    responseBody: `[
  {
  "_id": "65d1fddcec78dddbe99ad653",
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL"
  }
]`,
    responseBodySchema: `[
  {
  _id: string;
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  }
]`,
    mainStatuses: [
      { message: "response json body", status: 200 },
      { message: "Bad Request", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "GET",
    endpoint: "/assets/:id",
    operationGoal: "Get asset by id",
    token: true,
    requestBodyType: "No Body",
    requestBody: `No need Body`,
    requestBodySchema: `No schema`,
    responseBody: `{
  "_id": "65d1fddcec78dddbe99ad653",
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL"
  }`,
    responseBodySchema: `{
  _id: string;
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  }`,
    mainStatuses: [
      { message: "Request body", status: 200 },
      { message: "Login errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "/assets",
    operationGoal: "Post asset to db",
    token: true,
    requestBodyType: "json",
    requestBody: `{
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL"
  }`,
    requestBodySchema: `{
  assetId: string;---------REQUIRED
  amount: number;----------REQUIRED
  price: number;-----------REQUIRED
  date: string;------------REQUIRED
  growPercent: number;-----REQUIRED
  totalAmount: number;-----REQUIRED
  totalProfit: number;-----REQUIRED
  grow: boolean;-----------REQUIRED
  name: string;------------REQUIRED
  priceAverage: number;----REQUIRED
  icon: string;------------REQUIRED
  symbol: string;----------REQUIRED
  favorite: boolean;
  }`,
    responseBody: `{
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL",
  "_id": "65d1fddcec78dddbe99ad652",
  "createdAt": "2020-01-20T17:44:04.465Z",
  "updatedAt": "2020-01-20T17:44:04.465Z",

  }`,
    responseBodySchema: `{
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  _id: string;
  createdAt: string,
  updatedAt: string,
  }`,
    mainStatuses: [
      { message: "Response body", status: 200 },
      { message: "Add asset errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "/:id/favorite",
    operationGoal: "Add asset to favorite",
    token: true,
    requestBodyType: "json",
    requestBody: `{
  "favorite": true,
  }`,
    requestBodySchema: `{
  favorite: boolean ---------REQUIRED
  }`,
    responseBody: ` {
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL",
  "_id": "65d1fddcec78dddbe99ad652",
  "createdAt": "2020-01-20T17:44:04.465Z",
  "updatedAt": "2020-01-20T17:44:04.465Z",
  "favorite": true
  }`,
    responseBodySchema: `{
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  _id: string;
  createdAt: string,
  updatedAt: string,
  favorite: boolean
  }`,
    mainStatuses: [
      { message: "Response body", status: 200 },
      { message: "Update favorite errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "DELETE",
    endpoint: "assets/:id",
    operationGoal: "Delete asset",
    token: true,
    requestBodyType: "No Body",
    requestBody: `No need Body`,
    requestBodySchema: `No schema`,
    responseBody: `{
  "message": "Delete success",
  }`,
    responseBodySchema: `
    {
    message: string,
     }`,
    mainStatuses: [
      { message: "Delete success", status: 200 },
      { message: "Change request errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "PUT",
    endpoint: "/assets/updateAll",
    operationGoal: "Updating array of assets",
    token: false,
    requestBodyType: "json",
    requestBody: `[
      {
  "_id": "65d1fddcec78dddbe99ad652,
  "amount": 1.25,
  "price": 122.61250000000001,
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  },
  {
  "_id": "65d1fddcec78dd2be99ad6awd,
  "amount": 10,
  "price": 13.55,
  "favorite": true
  },
    ]`,
    requestBodySchema: `[{
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  _id: string---------REQUIRED;
  createdAt: string,
  updatedAt: string,
  favorite: boolean
  }]`,

    responseBody: `
   [
      {
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL",
  "_id": "65d1fddcec78dddbe99ad652",
  "createdAt": "2020-01-20T17:44:04.465Z",
  "updatedAt": "2020-01-20T17:44:04.465Z",
  "favorite": true
  },
  {
  "assetId": "tatico",
  "name": "Taticoin",
  "amount": 10,
  "price": 13.55,
  "priceAverage": 13.55,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 135.5,
  "totalProfit": 0,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "TTC",
  "_id": "65d1fddcec78dd2be99ad6awd",
  "createdAt": "2020-01-20T17:44:04.465Z",
  "updatedAt": "2020-01-20T17:44:04.465Z",
  "favorite": true
  },
    ]`,
    responseBodySchema: `[
  {
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  _id: string;
  createdAt: string,
  updatedAt: string,
  favorite: boolean
  }]`,
    mainStatuses: [
      { message: "Response body", status: 201 },
      { message: "Assets updated errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "PUT",
    endpoint: "/assets/:id",
    operationGoal: "Update one asset by id",
    token: true,
    requestBodyType: "json",
    requestBody: `{
  "_id": "65d1fddcec78dddbe99ad652,
  "amount": 1.25,
  "price": 122.61250000000001,
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
    }`,
    requestBodySchema: `{
  assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  _id: string---------REQUIRED;
  createdAt: string,
  updatedAt: string,
  favorite: boolean
  }`,
    responseBody: `      {
  "assetId": "solana",
  "name": "Solana",
  "amount": 1.25,
  "price": 122.61250000000001,
  "priceAverage": 98.09,
  "date": "Sun, 18 Feb 2024 12:53:48 GMT",
  "growPercent": 14.99,
  "totalAmount": 140.99130522205226,
  "totalProfit": 18.37880522205225,
  "grow": false,
  "owner": {
    "_id": "65d1f79cec78dddbe99ad62a",
    "name": "Adrian Cross",
    "email": "across@mail.com"
    },
  "icon":
  "https://static.coinstats.app
  /coins/1701234596791.png",
  "symbol": "SOL",
  "_id": "65d1fddcec78dddbe99ad652",
  "createdAt": "2020-01-20T17:44:04.465Z",
  "updatedAt": "2020-01-20T17:44:04.465Z",
  "favorite": true
  }`,
    responseBodySchema: `{
    assetId: string;
  amount: number;
  price: number;
  date: string;
  growPercent: number;
  totalAmount: number;
  totalProfit: number;
  owner: {
    _id: string,
    name: string,
    email: string
    }
  grow: boolean;
  name: string;
  priceAverage: number;
  icon: string;
  symbol: string;
  _id: string;
  createdAt: string,
  updatedAt: string,
  favorite: boolean
  }`,
    mainStatuses: [
      { message: "Response body", status: 201 },
      { message: "Change asset errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
];
