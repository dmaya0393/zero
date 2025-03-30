import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.prod' });
  } else {
    dotenv.config({ path: '.env.dev' });
  }
  console.log('Environment',process.env.NODE_ENV)
  const PORT = parseInt(process.env.PORT as string)


import express from 'express';
import  {createTables}  from './database/tableDefinitions';


const app = express();
createTables()
app.use((req, res, next) => {
    console.log('We Should be fine')
    console.log(`Request Method: ${req.method} | Requested URL: ${req.url}`);
    next(); // Call the next middleware or route handler
});

app.get('/api', (req, res) => {
    res.status(200).json({message: 'what will i receive for this?? /api'})
    console.log('ARE WE REACHING HERE??')
});

// Start the server
app.listen(PORT, '127.0.0.1', () => {

    console.log(`Server running on port ${PORT}`);
  });
