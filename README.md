# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run

```

# Customer Support System

This AdonisJS-powered Customer Support System emphasizes simplicity and effectiveness, featuring a user-friendly support request form. Customers can effortlessly submit inquiries, providing essential details such as first name, last name, email address, support message title, and a file upload option.

## Form Fields

- First Name
- Last Name
- Email Address
- Support Message Title
- Support Message Text (allows long text)
- File Upload (supports one file)
  ![complaint Diagram](customerform/user.JPG)

## Database Structure

The system manages two primary tables:

### Support Requests

- Fields: ID, First Name, Last Name, Email, Title, Message, File
- Relationships: Belongs to a User

### Users

- Fields: ID, Email Address, Full Name
- Relationships: Has Many Support Requests

## Functionality

- Seamless support request submissions for users.
- Linking each support request to a user based on the provided email address.
- Implemented tests for accurate handling of support request submissions.
- Demonstrates data persistence and successful file uploads.
- Multiple support requests with the same email address are linked to the corresponding user.

## Database Diagram

![Database Diagram](customerform/Untitled.png)

## Note

This system excludes authentication and registration flows, prioritizing simplicity for customer support interactions.

Feel free to explore, contribute, or customize the system to meet your specific requirements.
