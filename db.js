const { Pool } = require("pg");
const pool = new Pool({
    connectionString:"postgresql://neondb_owner:npg_1h8zWcvmrZQH@ep-curly-resonance-atrwrj3a-pooler.c-9.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require",
    ssl: { rejectUnauthorized: true },
    port: 5432
});

module.exports = pool;
