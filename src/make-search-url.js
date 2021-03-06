export function makeSearchUrl(searchOptions) {
    const query = encodeURIComponent(searchOptions.term);
    if(!query) {
        return '';
    }
    const url = `https://swapi.co/api/starships/?search=${query}`;
    return url;
}
