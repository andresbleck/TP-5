const express = require('express');
const app = express();
const negocio = require('./negocio');

app.use(express.json());

app.get('/productos', (req, res) => {
  res.json(negocio.listarProductos());
});

app.get('/productos/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const producto = negocio.obtenerProductoPorId(id);
    res.json(producto);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.post('/productos', (req, res) => {
  try {
    const { nombre, precio } = req.body;
    const producto = negocio.agregarProducto(nombre, precio);
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/productos/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    negocio.eliminarProducto(id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('API REST corriendo en http://localhost:3000');
});
