'use strict'

/*
|--------------------------------------------------------------------------
| EstudianteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const EstudianteModel = use('App/Models/Estudiante');

class EstudianteSeeder {
  async run () {
    await EstudianteModel.create({name : 'Bryan'});
    await EstudianteModel.create({name : 'Jorge'});
  }
}

module.exports = EstudianteSeeder
