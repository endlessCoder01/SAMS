const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer"); 

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
const farm_memberRoutes = require('./routes/farm_memberRoutes')

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
app.use('/farm-member', farm_memberRoutes);


// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads"; // Directory to save images
    fs.mkdirSync(uploadDir, { recursive: true }); // Create directory if it doesn't exist
    cb(null, uploadDir); // Set destination
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with timestamp
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage: storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/Documents", express.static(path.join(__dirname, "Documents")));

app.post("/uploads", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const filePath = path.join("uploads", req.file.filename); // Get the file path
  res.json({ path: filePath }); // Return the file path as JSON
});

app.get("/", (req, res) => {
  res.send("Documents"); // Response for the root URL
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


