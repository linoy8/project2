const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// מאפשר קריאת JSON מהבקשה
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// מאפשר CORS כדי שה-FE יוכל לשלוח בקשות
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// נקודת קצה לקבלת נתוני הטופס
app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  console.log("שם משתמש:", username);
  console.log("אימייל:", email);

  res.send("הנתונים התקבלו בהצלחה!");
});

// נקודת קצה ל-GET
app.get("/get", (req, res) => {
  console.log("GET request data:", req.query);
  res.send("GET request התקבל!");
});

// נקודת קצה ל-POST
app.post("/post", (req, res) => {
  console.log("POST request data:", req.body);
  res.send("POST request התקבל!");
});

// Endpoint to receive product ID
app.post("/product", (req, res) => {
  const { id, title } = req.body;
  console.log("Received product ID:", id); // print ID in server console
  console.log(title);
  res.json({ message: `Product with ID ${id} received on server` });
});

// הפעלת השרת
app.listen(port, () => {
  console.log(`השרת רץ: http://localhost:${port}`);
});
