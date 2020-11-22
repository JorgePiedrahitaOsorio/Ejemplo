'use strict'

const EstudianteService = use('App/Services/EstudianteService');

class EstudianteController {

  async create({response, request}){
    try {
      const {name} = request.body;
      const estudiante = await EstudianteService.createEstudent(name);
      return estudiante.error ? response.badRequest(estudiante): response.ok(estudiante);
    } catch (error) {
      console.log(error)
      return response.internalServerError(error);
    }
  }
}

module.exports = EstudianteController
