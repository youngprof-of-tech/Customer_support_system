// app/Models/Post.js

const Model = use("Model");

class Post extends Model {
  static boot() {
    super.boot();

    // Add any hooks or custom methods here
  }

  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Post;
