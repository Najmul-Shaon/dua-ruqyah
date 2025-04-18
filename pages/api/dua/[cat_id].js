import db from "../../../lib/db";

export default function handler(req, res) {
  const {
    query: { cat_id },
    method,
  } = req;

  // Only handle GET requests
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Prepare the query to fetch duas based on cat_id
    const stmt = db.prepare("SELECT * FROM dua WHERE cat_id = ?");
    const rows = stmt.all(cat_id); // Execute the query with the cat_id

    // Return the fetched rows as JSON response
    res.status(200).json(rows);
  } catch (error) {
    // Handle any errors and return a 500 status with error message
    res.status(500).json({ error: error.message });
  }
}
