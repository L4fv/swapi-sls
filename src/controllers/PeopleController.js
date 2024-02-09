const PeopleService = require("../services/PeopleService");
const PersonValidator = require("../validators/AppSchemaValidator");
const {
  MSG_ERROR_11001,
  MSG_ERROR_11002,
  MSG_ERROR_11003,
  MSG_ERROR_11004,
} = require("../constants/ErrorConstants");

class PeopleController {
  static async getPeopleCtrl(event) {
    try {
      const { id } = event.pathParameters;
      console.log("id",id)
      if (!id) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            status: false,
            message: MSG_ERROR_11001,
          }),
        };
      }

      const result = await PeopleService.getPeople(id);

      return {
        statusCode: 200,
        body: JSON.stringify({
          status: true,
          message: MSG_ERROR_11002,
          data: result,
        }),
      };
    } catch (error) {
      console.error("ERROR", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          status: false,
          message: MSG_ERROR_11003,
        }),
      };
    }
  }

  static async postPeopleCtrl(event) {
    try {
      const data = JSON.parse(event.body);
      const { error, value } = PersonValidator.validate(data);

      if (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            status: false,
            message: MSG_ERROR_11001,
          }),
        };
      }
      const result = await PeopleService.setPeople(data);
      console.log("HELLO WORLD", result);

      return {
        statusCode: 201,
        body: JSON.stringify({ status: true, message: MSG_ERROR_11002 }),
      };
    } catch (error) {
      console.error("HELLO ERROR", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          status: false,
          message: MSG_ERROR_11004,
        }),
      };
    }
  }
}

module.exports = PeopleController;
