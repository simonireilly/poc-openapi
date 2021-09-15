import * as sst from "@serverless-stack/resources";
import { ApiAuthorizationType } from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /users/{userId}": "src/app.getUser",
        "POST /users": "src/app.createUser",
      },
      defaultAuthorizationType: ApiAuthorizationType.AWS_IAM,
    });

    // Show the endpoint in the output
    this.addOutputs({
      "apiId": api.httpApi.apiId,
    });
  }
}
