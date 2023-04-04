const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const knex = require('knex')(require('path/to/knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});
app.get('/movies', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM movies');
      const movies = result.rows.map((row) => row.title);
      res.send(movies);
      client.release();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving movies from database');
    }
  });
  
  app.post('/movies', async (req, res) => {
    const { title } = req.body;
    try {
      const client = await pool.connect();
      await client.query('INSERT INTO movies (title) VALUES ($1)', [title]);
      res.sendStatus(201);
      client.release();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error inserting movie into database');
    }
  });
  

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});