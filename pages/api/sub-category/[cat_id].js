import db from "../../../lib/db";


export default function handler(req, res) {
  const {
    query: { cat_id },
    method,
  } = req;

  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const stmt = db.prepare("SELECT * FROM sub_category WHERE cat_id = ?");
    const rows = stmt.all(cat_id);

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
