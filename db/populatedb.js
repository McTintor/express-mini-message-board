#!/usr/bin/env node

require('dotenv').config();

const { Client } = require("pg");

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  console.error("Error: DB_URL environment variable is not set.");
  process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  person VARCHAR (255) NOT NULL,
  title VARCHAR (255) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT NOW()
);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM messages LIMIT 1) THEN
    INSERT INTO messages (person, title, text) 
    VALUES
      ('Bryan', 'Hello World', 'This is my first message.'),
      ('Odin', 'Greetings', 'Welcome to the message board.'),
      ('Damon', 'Update', 'Here is some exciting news for today.');
  END IF;
END $$;
`;

async function main() {
  console.log("Seeding database...");
  
  const client = new Client({ connectionString: dbUrl });
  
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Seeding complete.");
  } catch (err) {
    console.error("Error during seeding:", err.message);
  } finally {
    await client.end();
  }
}

main();
