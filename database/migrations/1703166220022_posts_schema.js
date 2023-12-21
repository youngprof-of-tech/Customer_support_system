// database/migrations/<timestamp>_posts.js

"use strict";

const Schema = use("Schema");

class PostsSchema extends Schema {
  up() {
    this.create("posts", (table) => {
      table.increments();
      table.string("fname");
      table.string("lname");
      table.string("email");
      table.string("title");
      table.text("message");
      table.string("file"); // Include the 'file' column
      table.timestamps();
    });
  }

  down() {
    this.drop("posts");
  }
}

module.exports = PostsSchema;
