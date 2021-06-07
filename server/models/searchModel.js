/*
 * searchModel.js
 * Functions to handle interactions between data model and returned data
 * for member searching and filtering
 */
const Helpers = require("../handlers/db");

/**********************************************************************
 * get all data needed for filtering
 *********************************************************************/
const getFilterData = async function () {
    return await getProfessionsAndSubProfessions();
};

const getProfessionsAndSubProfessions = async function () {
    const queryString = `SELECT profession_name, profession_id    
    from profession`;

    const filter = [];
    const professionList = await Helpers.runQuery(queryString, filter);
    let professions = []
    for (let profession of professionList) {
        let sub_professions = []
        const subProfessionList = await getSubProfessions(profession.profession_id);
        for (let sub_profession of subProfessionList) {
            sub_professions.push({
                id: sub_profession.sub_profession_name,
                label: sub_profession.sub_profession_name
            });
        }
        professions.push({
            id: profession.profession_name,
            label: profession.profession_name,
            children: sub_professions
        });
    }
    return professions
};

const getSubProfessions = async function (profession_id) {
    const queryString = `SELECT sub_profession_name    
    from sub_profession where profession_id = $1`;

    const filter = [profession_id];
    return await Helpers.runQuery(queryString, filter);
};

module.exports = {
    getFilterData,
    getProfessionsAndSubProfessions,
    getSubProfessions
};