"use strict";

const { test, trait } = use("Test/Suite")("PostController");
const Post = use("App/Models/Post");
const User = use("App/Models/User");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("submitting a support request", async ({ client, assert }) => {
  const user = await User.create({
    email: "test@example.com",
    // Add other user fields as needed
  });

  const postData = {
    fname: "John",
    lname: "Doe",
    email: "test@example.com",
    title: "Test Support Request",
    message: "This is a test support request.",
    file: "test-file.txt",
  };

  // Submit a support request
  const response = await client.post("/posts").send(postData).end();

  // Assert that the response is a redirect
  response.assertStatus(302);

  // Assert that a post was created in the database
  const post = await Post.query().where("email", postData.email).first();
  assert.exists(post);

  // Assert that the post attributes match the submitted data
  assert.equal(post.fname, postData.fname);
  assert.equal(post.lname, postData.lname);
  assert.equal(post.email, postData.email);
  assert.equal(post.title, postData.title);
  assert.equal(post.message, postData.message);
  assert.equal(post.file, postData.file);

  // Assert that the post is associated with the correct user
  assert.equal(post.user_id, user.id);
});
