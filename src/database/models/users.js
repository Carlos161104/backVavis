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

app.post('/quotations', async (req, res) => {
  const { client_id, user_id, products } = req.body;
  let total = 0;

  products.forEach(product => {
    total += product.quantity * product.price;
  });

  try {

    const quotationResult = await pool.query(
      'INSERT INTO quotations (client_id, user_id, total) VALUES ($1, $2, $3) RETURNING *',
      [client_id, user_id, total]
    );
    const quotationId = quotationResult.rows[0].id;

    for (const product of products) {
      await pool.query(
        'INSERT INTO quotations_products (quotation_id, product_name, quantity, price) VALUES ($1, $2, $3, $4)',
        [quotationId, product.product_name, product.quantity, product.price]
      );
    }

    res.status(201).json({ message: 'Cotización creada', quotation: quotationResult.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/quotations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM quotations');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/quotations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quotation = await pool.query('SELECT * FROM quotations WHERE id = $1', [id]);
    const products = await pool.query('SELECT * FROM quotations_products WHERE quotation_id = $1', [id]);
    
    if (quotation.rows.length === 0) {
      return res.status(404).json({ error: 'Cotización no encontrada' });
    }

    res.status(200).json({ ...quotation.rows[0], products: products.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/quotations/:id', async (req, res) => {
  const { id } = req.params;
  const { client_id, user_id, total } = req.body;

  try {
    const result = await pool.query(
      'UPDATE quotations SET client_id = $1, user_id = $2, total = $3 WHERE id = $4 RETURNING *',
      [client_id, user_id, total, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cotización no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/quotations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM quotations_products WHERE quotation_id = $1', [id]);
    const result = await pool.query('DELETE FROM quotations WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cotización no encontrada' });
    }

    res.status(200).json({ message: 'Cotización eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
