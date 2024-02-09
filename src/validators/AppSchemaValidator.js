const Joi = require('@hapi/joi');

class PersonValidator {
  static validate(person) {
    const schema = Joi.object({
      cumpleanios: Joi.string().required(),
      colorOjo: Joi.string().required(),
      filmacion: Joi.array().items(Joi.string()).required(),
      genero: Joi.string().required(),
      colorCabello: Joi.string().required(),
      talla: Joi.string().required(),
      lugarNacimiento: Joi.string().required(),
      peso: Joi.string().required(),
      nombre: Joi.string().required(),
      colorPiel: Joi.string().required(),
      creacion: Joi.string().required(),
      edicion: Joi.string().required(),
      especies: Joi.array().items(Joi.string()).required(),
      naveEstelar: Joi.array().items(Joi.string()).required(),
      url: Joi.string().required(),
      vehiculos: Joi.array().items(Joi.string()).required(),
    });

    return schema.validate(person);
  }
}

module.exports = PersonValidator;