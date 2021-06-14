const { Pool } = require("pg");

const dbConfig = {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    password: process.env.DATABASE_PW,
    port: process.env.DATABASE_PORT,
};
const pool = new Pool(dbConfig);

/**
 * Runs query based on parameter array provided. DB Driver requires second
 * argument to be array. Returns first set in rows array or 0 if no results
 * @param {string} queryText text of query with substitute parameters
 * @param {array} queryValues array of parameters for query
 */
async function runQuery(queryText, queryValues) {
    const query = { text: queryText, values: queryValues };
    const queryResult = await pool.query(query)
        .catch((err) => { console.error(err) });

    if (queryResult.rowCount) {
        return queryResult.rows;
    } else {
        return 0;
    }
}

module.exports = { runQuery };
