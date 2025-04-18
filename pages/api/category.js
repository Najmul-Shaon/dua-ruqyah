// pages/api/endpoint1.js

import db from "../../lib/db";

export default function handler(req, res) {
  try {
    const data = db.prepare("SELECT * FROM category").all();
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Database query failed", detail: err.message });
  }
}
