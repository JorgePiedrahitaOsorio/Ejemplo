const EstudianteModel = use('App/Models/Estudiante');

class EstudianteService{

    async createEstudent(name){
      try {
        const estudiante = await EstudianteModel.create({name});
        return {error: false, payload: estudiante, msg: 'Insertado con exito' };
      } catch (error) {
        return {'error' : true, msg: error};
      }
    }
}

module.exports = new EstudianteService();