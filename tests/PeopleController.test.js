const PeopleController = require("../src/controllers/PeopleController");
const PeopleService = require("../src/services/PeopleService");

describe("PeopleController", () => {
  describe("getPeopleCtrl", () => {
    it("should return 400 if id is not provided", async () => {
      const event = { pathParameters: {} };
      const response = await PeopleController.getPeopleCtrl(event);
      expect(response.statusCode).toBe(400);
    });

    it("should return 200 with data if id is provided", async () => {
      const event = { pathParameters: { id: "someId" } };
      const expectedResult = {
        /* mocked result */
      };
      jest.spyOn(PeopleService, "getPeople").mockResolvedValue(expectedResult);
      const response = await PeopleController.getPeopleCtrl(event);
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      // Add more assertions as needed
    });
  });

  describe("postPeopleCtrl", () => {
    it("should return 400 if validation fails", async () => {
      const body = {
        cumpleanios: "1990-01-01",
        colorOjo: "azul",
        filmacion: ["pelicula1", "pelicula2"],
        genero: "masculino",
        colorCabello: "negro",
        talla: "180 cm",
        lugarNacimiento: "Ciudad",
        peso: "70 kg",
        nombre: "Juan",
        colorPiel: "blanco",
        creacion: "2022-02-09",
        edicion: "2022-02-09",
        especies: ["humano"],
        naveEstelar: ["nave1", "nave2"],
        url: "http://example.com",
        vehiculos: ["vehiculo1", "vehiculo2"],
      };
      const event = { body: JSON.stringify(body) }; // Simulate invalid data
      const response = await PeopleController.postPeopleCtrl(event);
      expect(response.statusCode).toBe(400);
    });

    it("should return 201 if validation passes", async () => {
      const event = {
        body: JSON.stringify({
          /* valid data */
        }),
      };
      const response = await PeopleController.postPeopleCtrl(event);
      expect(response.statusCode).toBe(201);
    });

    // Add more test cases for different scenarios
  });
});
