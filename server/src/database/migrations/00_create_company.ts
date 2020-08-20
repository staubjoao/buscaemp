import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('company', (table) => {
    table.increments('id').primary();

    table.string('email').notNullable();
    table.string('passaword').notNullable();
    table.string('cep').notNullable();
    table.string('state').notNullable();
    table.string('city').notNullable();
    table.string('street').notNullable();
    table.string('district').notNullable();
    table.string('address_number').notNullable();
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.string('industry').notNullable();
    table.string('cnpj').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('company');
}
