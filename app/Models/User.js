// app/Models/User.js

const Model = use("Model");

class User extends Model {
  static boot() {
    super.boot();

    // Add any hooks or custom methods here
  }

  posts() {
    return this.hasMany("App/Models/Post");
  }
}

module.exports = User;
