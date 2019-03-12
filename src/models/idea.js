const Model = require("./_model");

module.exports = class Idea extends Model {
  static get tableName() {
    return "ideas";
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "ideas.id",
          to: "comments.ideas_id"
        }
      }
    };
  }
};
