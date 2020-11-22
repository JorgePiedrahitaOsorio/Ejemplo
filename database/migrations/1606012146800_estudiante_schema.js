'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstudianteSchema extends Schema {
  up () {
    this.create('estudiantes', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estudiantes')
  }
}

module.exports = EstudianteSchema
