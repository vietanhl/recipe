import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/** Global state of the app
 * - search object
 * - current recipe
 * - shopping list object
 * - liked objects
 */
const state = {};

const controlSearch = async () => {
        // get query from View
    const query = searchView.getInput();
    if (query) {
        // create new search obj and add to state
        state.search = new Search(query);
        // prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        //search for recipes
        await state.search.getResults();

        //render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e =>{ 
    //prevent reload
    e.preventDefault();
    controlSearch();
})
