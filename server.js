const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Proxy para Validacion
app.post('/Validacion', async (req, res) => {
    try {
        const response = await fetch('https://mundoarquero.ddns.net:5011/Validacion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error al hacer la solicitud /Validacion:', error);
        res.status(500).json({ error: 'Error interno del proxy en Validacion' });
    }
});

// Proxy para Sucursales
app.post('/Sucursales', async (req, res) => {
    try {
        const response = await fetch('https://mundoarquero.ddns.net:5011/Sucursales', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error al hacer la solicitud /Sucursales:', error);
        res.status(500).json({ error: 'Error interno del proxy en Sucursales' });
    }
});

// ✅ Proxy para Existencias
app.post('/Existencias', async (req, res) => {
    try {
        const response = await fetch('https://mundoarquero.ddns.net:5011/Existencias', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body), // Aquí pasamos el cuerpo directamente desde el cliente
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error al hacer la solicitud /Existencias:', error);
        res.status(500).json({ error: 'Error interno del proxy en Existencias' });
    }
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor proxy corriendo en el puerto ${PORT}`);
});
