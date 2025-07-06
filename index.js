const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/test', (req, res) => {
    console.log(req.body);
    res.json({ received: req.body });
});

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const farmRoutes = require('./routes/farmRoutes');
const cropRoutes = require('./routes/cropRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const sensorReadingRoutes = require('./routes/sensorReadingRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const documentRoutes = require('./routes/documentRoutes');
const alertRoutes = require('./routes/alertRoutes');
const testRoutes = require('./routes/testRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/farms', farmRoutes);
app.use('/crops', cropRoutes);
app.use('/sensors', sensorRoutes);
app.use('/sensor-readings', sensorReadingRoutes);
app.use('/recommendations', recommendationRoutes);
app.use('/documentation', documentRoutes);
app.use('/alert', alertRoutes);
app.use('/test', testRoutes);
app.use('/task', taskRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


