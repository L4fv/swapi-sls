const PeopleDb = require("../db/PeopleDb");
const starWars = require("../api/index");

class PeopleService {
  static async getPeople(id) {
    try {
      const { data, status } = await PeopleDb.getPeopleByIdDB(id);
      console.log("from service v1", status, data);

      if (status === true) {
        return {
          body: data,
        };
      } else {
        //buscar en API STAR_WARS
        const { data, status } = await starWars.GET_API_SW(id);
        console.log("from service v2", status, data);

        //se encontró en api sw?
        if (status === true) {
          return {
            body: JSON.stringify(new People(data)),
          };
        } else {
          // 404
          throw new Error({
            code: 404,
            message: "No se ha encontrado una persona en su busqueda",
          });
        }
      }
    } catch (error) {
      throw new Error({
        code: 500,
        message: "Ha ocurrido un error interno",
      });
    }
  }

  static async setPeople(body) {
    try {
      console.log("from service");
      return await PeopleDb.setPeopleByIdDB(body);
    } catch (error) {
      throw new Error({
        code: 500,
        message: "Ha ocurrido un error interno",
      });
    }
  }
}

module.exports = PeopleService;
