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

type TColorSchema = {
  GET: string;
  POST: string;
  PATCH: string;
  DELETE: string;
};

export const colorSchema: TColorSchema = {
  GET: "#2DD4BF",
  POST: "#FACC15",
  PATCH: "#A78BFA",
  DELETE: "#F87171",
};

export const operationsArray: ApiEndpoint[] = [
  {
    method: "POST",
    endpoint: "auth/register",
    operationGoal: "Create a new user",
    token: false,
    requestBodyType: "json",
    requestBody: `{
  "name": "Adrian Cross",
  "email": "across@mail.com",
  "password": "examplepwd12345"
  }`,
    requestBodySchema: `{
  name: string,-----REQUIRED
  email: string,----REQUIRED
  password: string--REQUIRED, Soil at the server
  }`,
    responseBody: `{
  "user": {
    "email": "across@mail.com",
    "name": "Adrian Cross",
    "subscription": "starter"
    }
  }`,
    responseBodySchema: `{
  name: string,
  email: string,
  password: string
}`,
    mainStatuses: [
      { message: "response json body", status: 200 },
      { message: "Bad Request", status: 400 },
      { message: "Email already in use", status: 409 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "GET",
    endpoint: "auth/verify/:verificationCode",
    operationGoal: "auto verify your email adress",
    token: false,
    requestBodyType: "No Body",
    requestBody: `No need Body`,
    requestBodySchema: `No schema`,
    responseBody: `{
  "message": "Email verify send success"
  }`,
    responseBodySchema: `{
  message: string
  }`,
    mainStatuses: [
      { message: "Email verify send success", status: 200 },
      { message: "Login errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "auth/verify",
    operationGoal: "Resent verify email to your post",
    token: false,
    requestBodyType: "json",
    requestBody: `{
  "email": "across@mail.com",
  }`,
    requestBodySchema: `{
  email: string,-----REQUIRED
  }`,
    responseBody: `{
  "message": "Email verify send success"
  }`,
    responseBodySchema: `{
  message: string
  }`,
    mainStatuses: [
      { message: "Email verify send success", status: 200 },
      { message: "Login errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "auth/login",
    operationGoal: "Log in",
    token: false,
    requestBodyType: "json",
    requestBody: `{
  "email": "across@mail.com",
  "password": "examplepwd12345"
  }`,
    requestBodySchema: `{
  email: string,------REQUIRED
  password: string,---REQUIRED
  }`,
    responseBody: ` {
    "user": {
      "email": "across@mail.com",
      "avatarURL":
      "avatars/65d1f79cec78dddbe99ad62c_1.webp",
      "subscription": "starter",
      },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI
      6IjY1ZDFmNzljZWM3OGRkZGJlOTlhZDYyYyIsImlhdCI6MTcwO
      DQxOTIwMywiZXhwIjoxNzA4NTAyMDAzfQ.lcsyk7tPXktHgRHM
      tnyIYUzfGWZlzU_BMt340-UwHPg"
    }`,
    responseBodySchema: `{
  user: {
    email: string,
    avatarURL: string,
    subscription: string
    },
  token: string;-----Life time 24h
  }`,
    mainStatuses: [
      { message: "Response body", status: 200 },
      { message: "Login errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "auth/verify/changePassword",
    operationGoal: "Change password request",
    token: true,
    requestBodyType: "json",
    requestBody: `{
  "email": "across@mail.com",
  }`,
    requestBodySchema: `{
  email: string,
  }`,
    responseBody: `{
  "message": "Email was sended to across@mail.com for
    changing password",
  }`,
    responseBodySchema: `
    {
    message: string,
     }`,
    mainStatuses: [
      { message: "response body", status: 200 },
      { message: "Change request errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "auth/verify/changePassword/:changePasswordCode",
    operationGoal: "Change password operation",
    token: true,
    requestBodyType: "json",
    requestBody: `{
  "password": "example123"
  }`,
    requestBodySchema: `{
  password: string,-----REQUIRED
  }`,

    responseBody: `
    {
    message: "Change password success"
     }`,
    responseBodySchema: `
    {
    message: string,
     }`,
    mainStatuses: [
      { message: "Change password success", status: 201 },
      { message: "Change password errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "GET",
    endpoint: "auth/current",
    operationGoal: "Fetch current user operation",
    token: true,
    requestBodyType: "No Body",
    requestBody: `No need Body`,
    requestBodySchema: `No schema`,
    responseBody: `{
  "name": "Adrian Cross",
  "email": "across@mail.com",
  "avatarURL": "<avatar-path>"
  }`,
    responseBodySchema: `{
  message: string,
  }`,
    mainStatuses: [
      { message: "Change password success", status: 201 },
      { message: "Change request errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "POST",
    endpoint: "auth/logout",
    operationGoal: "Logout operation",
    token: true,
    requestBodyType: "No Body",
    requestBody: `No need Body`,
    requestBodySchema: `No schema`,
    responseBody: `{
  "message": "Logout succes"
  }`,
    responseBodySchema: `{
  message: string,
  }`,
    mainStatuses: [
      { message: "Logout success", status: 201 },
      { message: "Change request errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "PATCH",
    endpoint: "auth/avatars",
    operationGoal: "Update avatar",
    token: true,
    requestBodyType: "form-data",
    requestBody: `{
  avatar: <yourAvatar.format>
  }`,
    requestBodySchema: `{
  avatar: file,-----REQUIRED
  }`,
    responseBody: `{
  "user": {
    "avatarURL":
    "avatars/65d1f79cec78dddbe99ad62c_1.webp"
    },
  "message": "Success: Avatar changed successfully."
  }`,
    responseBodySchema: `{
  user: {
    avatarURL: string
    },
  message: string
}`,
    mainStatuses: [
      { message: "Response body", status: 200 },
      { message: "Change avatar errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
  {
    method: "PUT",
    endpoint: "auth/subscription",
    operationGoal: "Change subscriptiun",
    token: true,
    requestBodyType: "form-data",
    requestBody: `{
   "subscription": "pro"
  }`,
    requestBodySchema: `{
  subscription: ["starter", "pro", "business"]
  }`,
    responseBody: `{
    "subscription": "pro"
  }`,
    responseBodySchema: `{
   subscription: ["starter", "pro", "business"]
}`,
    mainStatuses: [
      { message: "Response body", status: 200 },
      { message: "Change subscription errors", status: 400 },
      { message: "Server errors", status: 500 },
    ],
  },
];
