const AWS = require("aws-sdk");

// const BATCH_OPERATIONk_MAX_LENGTH = 25;
const TRANSACTION_MAX_LENGTH = 10;

class DynamoDBConnection {
  static async callSingleOperation(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    try {
      return await dynamoDb[action](params).promise();
    } catch (error) {
      console.error(error);
      throw new Error({
        code: 500,
        httpCode: 500,
        messages: error.message,
      });
    }
  }
}

module.exports = DynamoDBConnection;
