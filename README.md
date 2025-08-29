Full Stack Question Paper – VIT (REST API)
This project is a simple REST API built with Node.js and Express that solves the problem described in the VIT Full Stack Question Paper.

Objective
The API provides a single endpoint /bfhl that accepts a POST request with an array of strings. It processes this array to separate numbers, alphabets, and special characters, and returns a structured JSON response.

Tech Stack
Node.js: JavaScript runtime environment.

Express.js: A minimal and flexible Node.js web application framework.

How to Run Locally
Prerequisites:

Node.js (which includes npm) installed on your machine.

Clone the repository:

git clone <your-github-repo-url>
cd <repository-directory>

Install dependencies:

npm install

Start the server:

npm start

The server will start on http://localhost:3000.

API Endpoint
POST /bfhl
This endpoint processes the data array and returns the classified information.

Method: POST

URL: /bfhl

Success Status Code: 200

Request Body
The request body must be a JSON object containing a single key data, which is an array of strings.

Example Request:

{
    "data": ["a", "1", "334", "4", "R", "$"]
}

Response Body
The response is a JSON object with the following structure:

Example Success Response:

{
    "is_success": true,
    "user_id": "yash_gupta_29082003",
    "email": "yash.gupta2021a@vitbhopal.ac.in",
    "roll_number": "21BCE10056",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
}

Example Error Response (Invalid Input):

{
    "is_success": false,
    "error": "Invalid request format. 'data' must be an array."
}

Hosting
This application is ready to be hosted on any platform that supports Node.js, such as:

Vercel

Render

Railway

Heroku

Simply connect your GitHub repository to one of these services, and it should automatically deploy.