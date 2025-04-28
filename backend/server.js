const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const rooms = {}; // Lưu danh sách các phòng

function generatePin() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Random 6 số
}

app.post('/create-room', (req, res) => {
  const pin = generatePin();
  rooms[pin] = { questions: [] };
  res.json({ pin });
});

app.post('/add-question', (req, res) => {
  const { pin, questionData } = req.body;
  if (rooms[pin]) {
    rooms[pin].questions.push(questionData);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Room not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
