const fs = require("node:fs");

// Function to write to JSON file
function writeToFile(filePath, data, response) {
  const content = JSON.stringify(data);
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return response.status(500).json({ error: "Error writing to file" });
    }
    response.sendStatus(200);
  });
}

// Function to get the next ID
function getNextId(list) {
  const ids = list.map((e) => e.id);
  return ids.length ? Math.max(...ids) + 1 : 1;
}

module.exports = {
  writeToFile,
  getNextId,
};
