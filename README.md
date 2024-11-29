# Express Mini Message Board

This is a simple message board application built with **Express**, **PostgreSQL**, and **EJS**. Users can add new messages, view a list of all messages, and read the details of each message. It demonstrates the use of server-side rendering with EJS templates and PostgreSQL for storing message data.

Live version here: https://express-mini-message-board-lk6a.onrender.com

**Important Note** - It may take up to 60 seconds or more to load the website, since it is hosted on a free service (render.com).

## Features

- View a list of all messages
- Add a new message to the board
- View details of a specific message
- Edit an individual message
- Display message timestamps in a formatted date and time style

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or above)
- **PostgreSQL** (v13 or above)

You can check your version of Node.js and PostgreSQL with the following commands:

- `node -v`
- `psql --version`

## Getting Started

### 1. Clone the repository

Clone this repository to your local machine:

- `git clone https://github.com/mctintor/express-mini-message-board.git`
- `cd express-mini-message-board`

### 2. Install dependencies

Install the required dependencies using npm:

- `npm install`

### 3. Set up the database

Create a `.env` file in the root of your project and add your database connection URL. The content of the `.env` file should look like this:

- `DB_URL=postgres://yourusername:yourpassword@localhost:5432/yourdatabase`

Replace `yourusername`, `yourpassword`, and `yourdatabase` with your actual database credentials.

### 4. Set up the database tables

Run the `populatedb.js` script to create the database table and seed some initial data:

- `node db/populatedb.js`

This will create a table called `messages` and populate it with a few sample entries.

### 5. Start the app

Once everything is set up, you can start the app with:

- `npm start`

The app will be available at `http://localhost:3004`.

## File Structure

- `controllers/`
  - `index.js`          # Controller for handling route logic
- `db/`
  - `pool.js`           # Database connection pooling setup
  - `populatedb.js`     # Script to populate the database with sample data
  - `queries.js`        # Database queries (select, insert)
- `public/`
  - `styles.css`        # Public CSS file
- `routes/`
  - `index.js`          # Routes for defining API endpoints
- `views/`
  - `index.ejs`         # View for the home page
  - `details.ejs`       # View for displaying single message details
  - `404.ejs`           # Error Page
  - `form.ejs`          # View for adding new message
  - `edit.ejs`          # View for editing a message
