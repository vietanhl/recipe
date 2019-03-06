import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

async getResults(){
//axios == fetch, but is compatible with all browsers and automatically converts to JSON
    try{
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
    } catch(error) {
        alert(error);
    }
}
}
