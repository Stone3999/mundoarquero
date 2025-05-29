const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');  // <-- importar cors

const app = express();

app.use(cors());  // <-- habilitar CORS para todas las solicitudes (origenes)

app.use(express.json());

app.post('/Validacion', async (req, res) => {
    try {
        const response = await fetch('http://mundoarquero.ddns.net:5014/Validacion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        res.status(500).json({ error: 'Error interno del proxy' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor proxy corriendo en el puerto ${PORT}`);
});
