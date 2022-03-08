/*
 * userModel.js
 * Functions to handle interactions between data model and returned data
 */
const Helpers = require("../handlers/db");

/**********************************************************************
 * get user login data from the database
 *********************************************************************/
const login = async function (password, email) {
    // const queryString = `SELECT email    
    // from member
    // where password = crypt($1, password)
    // and email = $2`;
    const queryString = `SELECT email from fp_admin.members where pw_hash = crypt($1, pw_hash) and email = $2`;

    const filter = [password, email];
    return await Helpers.runQuery(queryString, filter);
};

/**********************************************************************
 * get admin login data from the database
 *********************************************************************/
const adminLogin = async function (password, email) {
    // const queryString = `SELECT email    
    // from admin
    // where password = crypt($1, password)
    // and email = $2`;
    const queryString = `SELECT email from fp_admin.members where pw_hash = crypt($1, pw_hash) and email = $2`;

    const filter = [password, email];
    return await Helpers.runQuery(queryString, filter);
};



module.exports = {
    login,
    adminLogin
};
