const axios = require('axios');

const API_KEY = '1c95230f-c6b6-440f-85a2-1ff6035e7a63';
const API_URL = 'https://api.cricapi.com/v1/currentMatches';
const BASE_URL = 'https://api.cricapi.com';

// function sendRequest(method, path, params, payload) {
//     axios({
//         baseURL: BASE_URL,
//         url: path,
//         method: method,
//         params: params,
//         data: payload,
//         timeout: 10000,
//     })
//         .then((response) =>  {
//             //console.log("API RESPONSE", response.data)
//             let matchList = response.data.data;
            
//             for (let match of matchList) {
//                 console.log(match.name);
//             }
                
//             }
//         )
//         .catch((error) => {
//             console.error("❌ Error from API:", error.message);
//             console.log("❗ Full Error:", error.response?.data || error);
//         });
// }

// function fetchCurrentMatches() {
//     const params = {
//         apikey: API_KEY,
//         offset: 0
//     };

//     return sendRequest(
//         'GET',
//         '/v1/currentMatches',
//         params,
//         undefined
//     )
// }

// fetchCurrentMatches();

function API_handling() {
    axios.get(API_URL, {
        params: {
            apikey: API_KEY,
            offset: 0
        }
    })
        .then((response) => {
            let matchList = response.data.data

            matchList.forEach(match => {
                console.log(match.id);
            });
           
            
        })
        .catch((error) => {
            console.error("❌ Error from API:", error.message);
            console.log("❗ Full Error:", error.response?.data || error);
        });
};


 API_handling();
