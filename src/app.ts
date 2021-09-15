import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { UsersController } from "./controllers/user";

export const getUser: APIGatewayProxyHandlerV2 = async () => {
  const user = new UsersController().getUser(1)

  return {
    statusCode: 200,
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }
}

export const createUser: APIGatewayProxyHandlerV2 = async () => {
  new UsersController().createUser({
    email: 'test@example.com',
    name: 'Test User',
    phoneNumbers: ['+447773444555']
  })

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json"
    }
  }
}
