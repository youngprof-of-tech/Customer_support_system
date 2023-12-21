"use strict";

const User = use("App/Models/User");
const Post = use("App/Models/Post");
const { validate } = use("Validator");

class PostController {
  async index({ view }) {
    return view.render("posts.index", {
      heading: "Customer Support Platform",
    });
  }

  async details({ params, view }) {
    const post = await Post.find(params.id);
    return view.render("posts.details", {
      post: post,
    });
  }

  async add({ view }) {
    return view.render("posts.add");
  }

  async store({ request, response, session }) {
    // Validate input
    const validationRules = {
      fname: "required|min:3|max:255",
      lname: "required|min:3|max:255",
      email: "required|email|max:255",
      title: "required|min:3|max:255",
      message: "required|min:3",
      file: "required",
    };

    const validation = await validate(request.all(), validationRules);

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect("back");
    }

    // Check if user with the provided email exists
    let user = await User.findBy("email", request.input("email"));

    if (!user) {
      // If user doesn't exist, you may choose to create a new user account
      user = await User.create({
        email: request.input("email"),
        // Add other user fields as needed
      });
    }

    // Create a new post and associate it with the user
    const post = new Post();
    post.fill({
      fname: request.input("fname"),
      lname: request.input("lname"),
      email: request.input("email"),
      title: request.input("title"),
      message: request.input("message"),
      file: request.input("file"),
    });

    // Associate the post with the user
    await user.posts().save(post);

    session.flash({ notification: "Information Submitted" });
    return response.redirect("/posts");
  }
}

module.exports = PostController;
