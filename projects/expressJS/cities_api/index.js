const express = require("express");
const cors = require("cors");

const countries = require("./countries.json");
const cities = require("./cities.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/countries", (req, res) => {
  setTimeout(() => {
    res.json(countries);
  }, 2000);
});

app.get("/countries/:countryId/cities", (req, res) => {
  const countryId = req.params.countryId;
  const citiesForCountry = cities[countryId];

  setTimeout(() => {
    if (citiesForCountry) {
      res.json(citiesForCountry);
    } else {
      res.status(404).json({ message: "Country not found or no cities available for this country." });
    }
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
