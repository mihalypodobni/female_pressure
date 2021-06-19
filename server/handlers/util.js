const config = require("../config");
const Crypto = require("../handlers/crypto");
const jwt = require("jsonwebtoken");

const checkUserSessionExpired = function(tokenCreationDate) {
	let aWeekAgo = Date.now() - config.USER_SESSION_EXPIRATION;
	return tokenCreationDate < aWeekAgo;
};

const createToken = function(data) {
	let jwtDataPayload = { user: data[0].email };

	let dateOfIssue = new Date();
	let jwtPayload = { data: jwtDataPayload, doi: dateOfIssue.getTime() };
	let payload = Crypto.encryptObject(jwtPayload);

	return jwt.sign({ payload }, config.ACCESS_TOKEN_SECRET, {
		algorithm: "HS256",
		expiresIn: config.ACCESS_TOKEN_LIFE,
	});
};

const buildLocationQuery = function(locations) {
	let queryString = ``;
	let continent = "";
	let country = "";
	let state = "";
	let city = "";
	let filter = [];
	let index = 1;

	//build arrays here
	for (let i = 0; i < locations.length; i++) {
		let l = locations[i].split(";");
		if (l.length === 3) {
			//continent;country;state
			if (state === "") {
				state = `ARRAY [$${index}] &&
                (array_agg(state_long_name || ';' || country_name || ';' || continent_name)) `;
			} else {
				let i = state.lastIndexOf("$");
				let newString = `, $${index}`;
				state = [state.slice(0, i + 2), newString, state.slice(i + 2)].join("");
			}
			index++;
			filter.push(`${l[2]};${l[1]};${l[0]}`);
		} else if (l.length === 2) {
			//continent;country
			if (country === "") {
				country = `ARRAY [$${index}] &&
                (array_agg(country_name || ';' || continent_name)) `;
			} else {
				let i = country.lastIndexOf("$");
				let newString = `, $${index}`;
				country = [
					country.slice(0, i + 2),
					newString,
					country.slice(i + 2),
				].join("");
			}
			index++;
			filter.push(`${l[1]};${l[0]}`);
		} else if (l.length === 1) {
			//continent
			if (continent === "") {
				continent = `ARRAY [$${index}] &&
                (array_agg(continent_name)) `;
			} else {
				let i = continent.lastIndexOf("$");
				let newString = `, $${index}`;
				continent = [
					continent.slice(0, i + 2),
					newString,
					continent.slice(i + 2),
				].join("");
			}
			index++;
			filter.push(`${l[0]}`);
		} else {
			if (city === "") {
				country = `ARRAY [$${index}] &&
                (array_agg(city_name || ';' || state_long_name || ';' || country_name || ';' || continent_name)) `;
			} else {
				let i = city.lastIndexOf("$");
				let newString = `, $${index}`;
				city = [city.slice(0, i + 2), newString, city.slice(i + 2)].join("");
			}
			index++;
			city += `${l[3]};${l[2]};${l[1]};${l[0]}`;
		}
	}

	//now build query string
	if (city !== "") {
		queryString += city;
	}
	if (state !== "") {
		if (queryString !== "") {
			queryString = queryString + ` OR ` + state;
		} else {
			queryString += state;
		}
	}
	if (country !== "") {
		if (queryString !== "") {
			queryString = queryString + ` OR ` + country;
		} else {
			queryString += country;
		}
	}
	if (continent !== "") {
		if (queryString !== "") {
			queryString = queryString + ` OR ` + continent;
		} else {
			queryString += continent;
		}
	}
	if (queryString !== "") {
		queryString = `HAVING ${queryString}`;
	}
	return { queryString: queryString, filter: filter, index: index };
};
module.exports = {
	checkUserSessionExpired,
	createToken,
};
