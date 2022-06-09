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
    console.log('db.js dbConfig = ' + JSON.stringify(dbConfig));
    console.log('db.js runQuery query = ' + JSON.stringify(query));
    const queryResult = await pool.query(query);
    if (queryResult.rowCount) {
	console.log('db.js runQuery queryResult = ' + JSON.stringify(queryResult));
        return queryResult.rows;
    } else {
        console.log("db.js runQuery no results, returning 0")
        return 0;
    }
}

module.exports = { runQuery };
