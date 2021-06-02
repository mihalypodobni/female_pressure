/*
 * userModel.js
 * Functions to handle interactions between data model and returned data
 */
const Helpers = require("../handlers/db");

/**********************************************************************
 * get user login data from the database
 *********************************************************************/
const login = async function (password, email) {
    const queryString = `SELECT member_email    
    from member
    where member_password = crypt($1, member_password)
    and member_email = $2`;

    const filter = [password, email];
    return await Helpers.runQuery(queryString, filter);
};


module.exports = {
    login
};
