
const axios = require('axios');
const readline = require('readline');

const API_KEY = '1c95230f-c6b6-440f-85a2-1ff6035e7a63';
const API_URL = 'https://api.cricapi.com/v1/currentMatches';



// Create an interface to read from input and write to output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


axios.get(API_URL, {
    timeout: 5000,
    params: {
        apikey: API_KEY,
        offset: 0
    }
})
    .then((response) => {
        //console.log(response.data.data);

        let matchList = response.data.data

        matchList.forEach(match => {
            console.log(match.id);
            console.log(match.name);
            
        });


        rl.question('\n🔎 Enter the ID of the match you want details for:\n', (id) => {

            let res = matchList.find(match => match.id === id) //find
            let scorecard = res.score;
            scorecard.forEach(team => {
                //console.log(team)
                console.log(`team : ${team.inning} has scored ${team.r}/${team.w} in ${team.o} overs`);
            }
            )
            rl.close(); // Close the interface

        })
    })
    .catch((error) => {
        console.log(error);
        rl.close(); // Close the interface
    })




