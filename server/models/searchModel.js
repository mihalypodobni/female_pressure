/*
 * searchModel.js
 * Functions to handle interactions between data model and returned data
 * for member searching and filtering
 */
const Helpers = require("../handlers/db");
const Util = require("../handlers/util")

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
                id: genreList[i].genre_name,
                label: genreList[i].genre_name,
                children: []
            })
            y = y + 1
        }
        genres[y].children.push({
            id: genreList[i].genre_name + ';' + genreList[i].sub_genre_name,
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
                id: professionList[i].profession_name,
                label: professionList[i].profession_name,
                children: []
            })
            y = y + 1
        }
        professions[y].children.push({
            id: professionList[i].profession_name + ';' + professionList[i].sub_profession_name,
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
        if (stateY === -1 || cityList[i - 1].country_name !== cityList[i].country_name) {
            cities[countryY].children.push({
                id: cityList[i].continent_name + ';' + cityList[i].country_name,
                label: cityList[i].country_name,
                children: []
            })
            stateY = stateY + 1
            cityY = -1
        } //push state
        if (cityY === -1 || cityList[i - 1].state_long_name !== cityList[i].state_long_name) {
            cities[countryY].children[stateY].children.push({
                id: cityList[i].continent_name + ';' + cityList[i].country_name + ';' + cityList[i].state_long_name,
                label: cityList[i].state_long_name,
                children: []
            })
            cityY = cityY + 1
        } //push city
        cities[countryY].children[stateY].children[cityY].children.push({
            id: cityList[i].continent_name + ';' + cityList[i].country_name + ';' + cityList[i].state_long_name + ';' + cityList[i].city_name,
            label: cityList[i].city_name
        })
    }
    return cities
};

const memberSearch = async function (query) {
    const queryString = `SELECT m.member_id, alias1, alias2, alias3, city_name, country_name, primary_city
            from member as m
            inner join member_city mc on mc.member_id = m.member_id
            inner join city c on c.city_id = mc.city_id
            inner join state s on s.state_id = c.state_id
            inner join country co on co.country_id = s.country_id
            where (alias1 ilike $1
            OR alias2 ilike $1
            OR alias3 ilike $1)
            AND primary_city = true
            limit 5`;

    const filter = ['%' + query + '%'];
    return await Helpers.runQuery(queryString, filter);
};

const getMember = async function (member_id) {
    const queryString = `SELECT email,
       disclose_email,
       first_name,
       last_name,
       disclose_name,
       phone_number,
       disclose_phone,
       deceased,
       remote,
       personal_site,
       pronouns,
       facebook,
       instagram,
       bandcamp,
       beatport,
       tiktok,
       soundcloud,
       book_name_1,
       book_name_2,
       book_link_1,
       book_link_2,
       band1,
       band2,
       band3,
       alias1,
       alias2,
       alias3,
       blurb,
       affiliation_name_1,
       affiliation_link_1,
       affiliation_name_2,
       affiliation_link_2,
       array_agg(DISTINCT sub_genre_name order by sub_genre_name)           AS genres,
       array_agg(city_name || ';' || state_long_name || ';' || country_name || ';' || continent_name
                 order by
                     primary_city desc)                                     as locations,
       array_agg(DISTINCT sub_profession_name order by sub_profession_name) AS professions
from member as m
         inner join member_city using (member_id)
         inner join city using (city_id)
         inner join state using (state_id)
         inner join country using (country_id)
         inner join continent using (continent_id)
         inner join member_profession using (member_id)
         inner join sub_profession using (sub_profession_id)
         inner join member_genre using (member_id)
         inner join sub_genre using (sub_genre_id)
where member_id = $1
group by alias1, alias2, alias3, email, disclose_email, first_name, last_name, disclose_name, phone_number,
         disclose_phone, deceased, personal_site, pronouns, facebook, instagram, bandcamp, beatport, tiktok,
         soundcloud, book_name_1, book_name_2, book_link_1, book_link_2, band1, band2, band3, blurb, affiliation_link_1,
         affiliation_link_2, affiliation_name_1, affiliation_name_2;`;

    const filter = [member_id];
    return await Helpers.runQuery(queryString, filter);
};

const loadMembers = async function (data) {
    console.time('codezup') //time load members function
    let professionData = await Util.buildProfessionQuery(data.selectedFilters.profession)
    let genreData = await Util.buildGenreQuery(data.selectedFilters.genre, professionData.index)
    let locationData = await Util.buildLocationQuery(data.selectedFilters.location, genreData.index)
    let otherData = await Util.buildOtherQuery(data.selectedFilters.other)
    let following = await Util.buildFollowingQuery(data.authenticated)

    const queryString = `WITH professions AS (
    SELECT alias1,
           array_agg(sub_profession_name
                     order by
                         sub_profession_name desc) as professions
    from member as m
             inner join member_profession mp on mp.member_id = m.member_id
             inner join sub_profession using (sub_profession_id)
             inner join profession using (profession_id)
    group by alias1 ` + professionData.queryString +
`),
     genres AS (
         SELECT alias1,
                array_agg(sub_genre_name
                          order by
                              sub_genre_name desc) as genres
         from member as m
                  inner join member_genre mg on mg.member_id = m.member_id
                  inner join sub_genre using (sub_genre_id)
                  inner join genre using (genre_id)
         where alias1 in (select alias1 from professions)
         group by alias1 ` + genreData.queryString +
     `)` + following.query +

` SELECT alias1,
       alias2,
       alias3,
       g.genres,
       p.professions, ` + following.select +
       `array_agg(city_name || ';' || state_long_name || ';' || country_name || ';' || continent_name
                 order by
                     primary_city desc)      as location
from member as m
         inner join member_city mc on mc.member_id = m.member_id
         inner join city c using (city_id)
         inner join state s using (state_id)
         inner join country co using (country_id)
         inner join continent using (continent_id)
         inner join genres g using (alias1)
         inner join professions p using (alias1)`
         + following.inner + otherData +
`group by alias1, alias2, alias3, g.genres, p.professions` + following.group + locationData.queryString +
`order by alias1 asc`

    console.log(queryString)

    const filter = [...professionData.filter, ...genreData.filter, ...locationData.filter]
    let res = await Helpers.runQuery(queryString, filter);
    console.timeEnd('codezup')
    return res

}

module.exports = {
    getFilterData,
    getProfessionsAndSubProfessions,
    getGenresAndSubgenres,
    getCities,
    memberSearch,
    getMember,
    loadMembers
};