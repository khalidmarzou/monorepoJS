require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// MongoDB connection
mongoose.connect(MONGODB_URI);

// Photo model
const photoSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
});

const Photo = mongoose.model("ImagePath", photoSchema, "image_paths");


app.get("/photos", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number
    const limit = parseInt(req.query.limit) || 5; // Photos per page
    const skip = (page - 1) * limit; // number of photos to skip

    // Total number of photos
    const totalPhotos = await Photo.countDocuments();

    // page photos
    const photos = await Photo.find()
      .skip(skip) // Skip the calculated number of documents
      .limit(limit) // Limit the number of documents returned
      .exec();

    // Total pages
    const totalPages = Math.ceil(totalPhotos / limit);

    res.json({
      photos,
      totalPhotos,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
