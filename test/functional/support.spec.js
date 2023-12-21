// test/functional/support.spec.js

"use strict";

const { test, trait } = use("Test/Suite")("Support Request Submission");
const Post = use("App/Models/Post");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("submitting a support request", async ({ client, assert }) => {
  // Your original test code for support request submission
  // ...

  // Optionally: Check if a notification or confirmation message is returned
  response.assertJSONSubset({
    message: "Support request submitted successfully.",
  });
});

test("submitting multiple support requests for the same user", async ({
  client,
  assert,
}) => {
  // Your new test code for multiple support requests with the same email
  // ...
});
