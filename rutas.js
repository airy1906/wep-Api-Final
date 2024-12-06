const express = require('express');
const router = express.Router();
const { productos } = require('./data');

// Productos
router.get('/api/v1/productos', (req, res) => {
    res.json(productos);
});

router.post('/api/v1/productos', (req, res) => {
    const nuevoProducto = req.body;
    nuevoProducto.id = productos.length + 1;
    productos.push(nuevoProducto);
    res.status(201).json({ message: 'Producto creado exitosamente', producto: nuevoProducto });
});

router.put('/api/v1/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        Object.assign(producto, req.body);
        res.json({ message: 'Producto actualizado', producto });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

router.delete('/api/v1/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        productos.splice(index, 1);
        res.json({ message: 'Producto eliminado' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});
// Usuarios
router.get('/api/v1/usuarios', (req, res) => {
    res.json([]);
});

// Transacciones
router.post('/api/v1/inventario', (req, res) => {
    res.json({ message: 'Movimiento registrado' });
});

module.exports = router;
