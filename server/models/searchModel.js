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
    let filterData = {}
    let professions = await getProfessionsAndSubProfessions();
    let genres = await getGenresAndSubgenres();

    filterData['genres'] = [...genres]
    filterData['professions'] = [...professions]
    return filterData
};

const getGenresAndSubgenres = async function () {
    const queryString = `SELECT genre_name, sub_genre_name
    from genre as g
    inner join sub_genre sg on g.genre_id = sg.genre_id
    order by genre_name asc`;

    const filter = [];
    const genreList = await Helpers.runQuery(queryString, filter);
    let genres = []
    let y = -1
    for (let i = 0; i < genreList.length; i++) {
        if (genres.length === 0 || genreList[i-1].genre_name !== genreList[i].genre_name) {
            genres.push({
                id: 'main ' + genreList[i].genre_name,
                label: genreList[i].genre_name,
                children: []
            })
            y = y + 1
        }
        genres[y].children.push({
            id: genreList[i].sub_genre_name,
            label: genreList[i].sub_genre_name,
        })
    }
    return genres
};

const getProfessionsAndSubProfessions = async function () {
    const queryString = `SELECT profession_name, sub_profession_name
    from profession
    inner join sub_profession sp on profession.profession_id = sp.profession_id
    order by profession_name asc`;

    const filter = [];
    const professionList = await Helpers.runQuery(queryString, filter);
    let professions = []
    let y = -1
    for (let i = 0; i < professionList.length; i++) {
        if (professions.length === 0 || professionList[i-1].profession_name !== professionList[i].profession_name) {
            professions.push({
                id: 'main ' + professionList[i].profession_name,
                label: professionList[i].profession_name,
                children: []
            })
            y = y + 1
        }
        professions[y].children.push({
            id: professionList[i].sub_profession_name,
            label: professionList[i].sub_profession_name,
        })
    }
    return professions
};


module.exports = {
    getFilterData,
    getProfessionsAndSubProfessions,
    getGenresAndSubgenres,
};