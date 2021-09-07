import axios, {AxiosResponse} from "axios";

class Employee {
    static async getEmployee(CountryCode: String, user: Object) {
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/alpha/${CountryCode}?fields=name;currencies;languages;timezones`);


        const {currencies, languages, timezones} = result.data;

        //I'm not sure if you are looking at the currency code or name so I will just post this here
        //if you want the name then uncomment the line below

        // const currency = currencies[0].name;
        const currency = currencies[0].code;


        //You want a list of language/s. Not sure if you want the name of the language or the whole object


        return {
            ...user, languages, currency, timezones,
        };
    }
}

export default Employee