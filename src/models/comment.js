const Model = require("./_model");

module.exports = class Comment extends Model {
  static get tableName() {
    return "comments";
  }

  static get relationMappings() {
    return {
      idea: {
        relation: Model.BelongsToOneRelation,
        modelClass: Idea,
        join: {
          from: "comments.ideas_id",
          to: "ideas.id"
        }
      }
    };
  }
};
