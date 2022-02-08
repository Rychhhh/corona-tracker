import axios from 'axios';

const api = 'https://covid19.mathdro.id/api';


// fetch data ( card )
export const fetchData = async (country) => {

    // jika user pick country
    let changeableAPI = api;

    if(country) {
        changeableAPI = `${api}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableAPI);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        return error;    
    }  
}   

// daily data ( chart )
export const fetchDailyData = async () => {
  try {
        const { data }= await axios.get('https://api.covidtracking.com/v1/us/daily.json');

        return data.map(({ positive ,recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered ,death,  date }));
    } catch (error) {
        return error;
    }
};

// countries data ( form country picker )
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${api}/countries`);

        return countries.map((countries) => countries.name);
    } catch (error) {
        return error;
    }
}