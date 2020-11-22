"use strict";

const { formatters } = use('Validator');

class Estudiante {
  get rules() {
    return {
      name: "required | alpha_numeric",
    };
  }

  get validateAll() {
    return true;
  }

  get formatter() {
    return formatters.JsonApi;
  }

  get messages() {
    return {
      "name.required": "You must provide a name",
      "name.alpha_numeric" : "The field only can be alpha numeric"
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest(errorMessages);
  }
}

module.exports = Estudiante;
