const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

app.use(express.json());

app.post('/clients', async (req, res) => {
  const { name, last_name, email, phone, company, channel_id, sales_funnel_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO clients (name, last_name, email, phone, company, channel_id, sales_funnel_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, last_name, email, phone, company, channel_id, sales_funnel_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/clients', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/clients/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/clients/:id', async (req, res) => {
  const { id } = req.params;
  const { name, last_name, email, phone, company, channel_id, sales_funnel_id } = req.body;

  try {
    const result = await pool.query(
      'UPDATE clients SET name = $1, last_name = $2, email = $3, phone = $4, company = $5, channel_id = $6, sales_funnel_id = $7 WHERE id = $8 RETURNING *',
      [name, last_name, email, phone, company, channel_id, sales_funnel_id, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/clients/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM clients WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
