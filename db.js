const { Pool } = require("pg");
const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_XquRaDK5f7NJ@ep-solitary-art-at7t659k-pooler.c-9.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require",
    ssl: { rejectUnauthorized: false },
    port: 5432
});
module.exports = pool;
