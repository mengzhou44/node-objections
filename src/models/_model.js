const Knex = require("knex");
const connection = require("../../db/knexfile");
const { Model } = require("objection");

const knexConnection = Knex(connection);

Model.knex(knexConnection);

module.exports = Model;
