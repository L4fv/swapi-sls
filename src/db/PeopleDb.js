const DynamoDBConnection = require("./connection/DynamoDBConnection");
const { v4: uuidv4 } = require("uuid");

class CotizacionDb {
  static async getPeopleByIdDB(id) {
    try {
      const params = {
        TableName: process.env.POST_TABLE || "TEST",
        Key: {
          id,
        },
      };
      console.log("params", params);
      return await DynamoDBConnection.callSingleOperation("get", params);
    } catch (error) {
      console.error("Error from data");
      throw new Error({
        code: error.code,
        httpCode: error.httpCode,
      });
    }
  }

  static async setPeopleByIdDB(data) {
    try {
      const id = uuidv4();
      const params = {
        TableName: process.env.POST_TABLE || "TEST",
        Item: {
          ...data,
          createAt: new Date().toISOString(),
          id,
        },
      };
      console.log("params", params);
      return await DynamoDBConnection.callSingleOperation("put", params);
    } catch (error) {
      console.error("Error from data");
      throw new Error({
        code: error.code,
        httpCode: error.httpCode,
      });
    }
  }
}

module.exports = CotizacionDb;
