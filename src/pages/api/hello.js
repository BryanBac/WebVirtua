import db from "../mysql/mysql"

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from Pokemon");
  console.log(rows)
  return res.status(200).json(rows)
}
