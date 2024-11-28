#!/usr/bin/env node

const { Client } = require("pg");

const dbUrl = process.argv[2];
if (!dbUrl) {
  console.error("Error: Please provide a database URL as a command line argument.");
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

INSERT INTO messages (person, title, text) 
VALUES
  ('Bryan', 'Hello World', 'This is my first message.'),
  ('Odin', 'Greetings', 'Welcome to the message board.'),
  ('Damon', 'Update', 'Here is some exciting news for today.');
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