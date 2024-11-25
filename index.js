const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

// Proxy endpoint to fetch weather data
app.get('/api/weather/city', async (req, res) => {
    try {
        const { city } = req.query;
        const response = await axios.get(`http://jouni-weather.runasp.net/api/weather/city?city=${city}`);
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).send('Error fetching data from API');
    }
});

app.get('/api/weather/latlon', async (req, res) => {
    try {
        const { lat, lon } = req.query;
        const response = await axios.get(`http://jouni-weather.runasp.net/api/weather/LatLon?lat=${lat}&lon=${lon}`);
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).send('Error fetching data from API');
    }
});

// Start the server
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
