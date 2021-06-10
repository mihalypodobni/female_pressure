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
    let cities = await getCities();
    filterData['genres'] = [...genres]
    filterData['professions'] = [...professions]
    filterData['cities'] = [...cities]
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
        if (genres.length === 0 || genreList[i - 1].genre_name !== genreList[i].genre_name) {
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
        if (professions.length === 0 || professionList[i - 1].profession_name !== professionList[i].profession_name) {
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

const getCities = async function () {
    const queryString = `SELECT continent_name, country_name, state_long_name, city_name
        from continent as c
        inner join country cy on cy.continent_id = c.continent_id
        inner join state s on s.country_id = cy.country_id
        inner join city ci on ci.state_id = s.state_id
        order by continent_name asc,
        country_name asc,
        state_long_name asc,
        city_name asc`;

    const filter = [];
    const cityList = await Helpers.runQuery(queryString, filter);
    let cities = []
    let countryY = -1
    let stateY = -1
    let cityY = -1
    for (let i = 0; i < cityList.length; i++) {
        //push new continent
        if (cities.length === 0 || cityList[i - 1].continent_name !== cityList[i].continent_name) {
            cities.push({
                id: cityList[i].continent_name,
                label: cityList[i].continent_name,
                children: []
            })
            countryY = countryY + 1
            stateY = -1
        } //push country
        if (cities.length === 1 || cityList[i - 1].country_name !== cityList[i].country_name) {
            cities[countryY].children.push({
                id: cityList[i].country_name,
                label: cityList[i].country_name,
                children: []
            })
            stateY = stateY + 1
            cityY = -1
        } //push state
        if (cities.length === 1 || cityList[i - 1].state_long_name !== cityList[i].state_long_name) {
            cities[countryY].children[stateY].children.push({
                id: 'state ' + cityList[i].state_long_name,
                label: cityList[i].state_long_name,
                children: []
            })
            cityY = cityY + 1
        } //push city
        if (cities.length === 1 || cityList[i - 1].city_name !== cityList[i].city_name) {
            cities[countryY].children[stateY].children[cityY].children.push({
                id: cityList[i].city_name,
                label: cityList[i].city_name
            })
        }
    }
    return cities
};


module.exports = {
    getFilterData,
    getProfessionsAndSubProfessions,
    getGenresAndSubgenres,
    getCities
};