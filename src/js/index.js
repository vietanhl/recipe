import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';
import Recipe from './models/Recipe';


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
        renderLoader(elements.searchRes);
        //search for recipes
        await state.search.getResults();

        //render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e =>{ 
    //prevent reload
    e.preventDefault();
    controlSearch();
});

//pagination
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

//Recipe Controller
const r = new Recipe(47746);
r.getRecipe();
console.log(r);