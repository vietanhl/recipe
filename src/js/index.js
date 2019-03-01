import axios from 'axios';

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
//axios == fetch, but is compatible with all browsers and automatically converts to JSON
    const key = '82d1f6db9072ed56dce1d3b2c414322b';    
    try{
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch(error) {
        alert(error);
    }
}

getResults('pizza');