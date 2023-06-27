import {createPool} from 'mysql2/promise';

const db = createPool({
  host: '18.119.29.121', // Cambia esto si tu base de datos está en un host diferente
  user: 'usuario2', // Reemplaza con el nombre de usuario de tu base de datos
  password: 'Pass1234*', // Reemplaza con la contraseña de tu base de datos
  database: 'compras', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from compras");
  return res.status(200).json(rows)
}