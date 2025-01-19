import { Pool } from "pg";

// Environment variables for the database connection
const pool = new Pool({
  connectionString:
    "postgresql://postgres:PhqQBKOHcbINZrfhICntsvKPQrSsdFtQ@autorack.proxy.rlwy.net:21471/railway", // Set DATABASE_URL in .env
  ssl: {
    rejectUnauthorized: false, // For hosted databases like Railway
  },
});

export default pool;
//     async function query(text: string, params?: undefined) {
//   const res = await pool.query(text, params);
//   return res.rows;
// }
