const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for specific origin
app.use(cors({
    origin: 'https://jouni-weather.netlify.app', // Allow only your frontend domain
}));

app.get('/api/weather/city', async (req, res) => {
    try {
        const { city } = req.query;
        const response = await axios.get(`http://jouni-weather.runasp.net/api/weather/city?city=${city}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).send('Error fetching data from API');
    }
});

app.get('/api/weather/LatLon', async (req, res) => {
    try {
        const { lat, lon } = req.query;
        const url = `http://jouni-weather.runasp.net/api/weather/LatLon?lat=${lat}&lon=${lon}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.status(500).send('Error fetching data from API');
    }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
