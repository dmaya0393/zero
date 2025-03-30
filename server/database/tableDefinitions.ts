import { client } from './dbConfig';

// Table creation query
const createUsersList = `
  CREATE TABLE IF NOT EXISTS "usersList" (
    "userID" VARCHAR(10) NOT NULL,
    "username" VARCHAR(25) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "profilePicURL" TEXT NULL DEFAULT NULL,
    PRIMARY KEY ("userID"),
    CONSTRAINT unique_member UNIQUE ("username"),
    CONSTRAINT unique_email UNIQUE ("email")
  );
`;

// Function to create tables
async function createTables(): Promise<void> {
  try {
    await client.query(createUsersList);
    console.log("UsersList table created!");
    console.log("ALL TABLEs CREATED....");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

// Invoke the table creation function immediately
createTables();

// Export the function for use in other files if needed
export { createTables };
