const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Rutas para tu API REST
app.get("/api/v1/productos", (req, res) => {
    res.json({ mensaje: "Lista de productos" });
});

app.post("/api/v1/productos", (req, res) => {
    res.json({ mensaje: "Producto creado" });
});

app.put("/api/v1/productos/:id", (req, res) => {
    res.json({ mensaje: `Producto ${req.params.id} actualizado` });
});

app.delete("/api/v1/productos/:id", (req, res) => {
    res.json({ mensaje: `Producto ${req.params.id} eliminado` });
});

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Inventario');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor' });
});

// Configuración del puerto dinámico
const PORT = process.env.PORT || 30001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
