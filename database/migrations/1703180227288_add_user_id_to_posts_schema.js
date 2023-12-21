"use strict";

const Schema = use("Schema");

class AddUserIdToPostsSchema extends Schema {
  up() {
    this.table("posts", (table) => {
      table.integer("user_id").unsigned().references("id").inTable("users");
    });
  }

  down() {
    this.table("posts", (table) => {
      table.dropColumn("user_id");
    });
  }
}

module.exports = AddUserIdToPostsSchema;
