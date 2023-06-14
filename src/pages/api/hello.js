import {createPool} from 'mysql2/promise';

const db = createPool({
  host: '3.144.37.35', // Cambia esto si tu base de datos está en un host diferente
  user: 'mostrar', // Reemplaza con el nombre de usuario de tu base de datos
  password: 'Pass123+', // Reemplaza con la contraseña de tu base de datos
  database: 'Tarea', // Reemplaza con el nombre de tu base de datos
});

export default async function handler(req, res) {
  const [rows] = await db.query("Select * from Pokemon");
  console.log(rows)
  return res.status(200).json(rows)
}
