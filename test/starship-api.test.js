import { makeSearchUrl } from '../src/starship-api.js';
const test = QUnit.test;
QUnit.module('make URL');


test('includes search term in URL', assert => {
    //arrange
    const searchOptions = {
        searchTerm: 'death'
    };

    const expected = `https://swapi.co/api/starships/?search=death`;
    //act
    const result = makeSearchUrl(searchOptions);

    //assert
    assert.equal(result, expected);
});

test('search returns empty url if no search term', assert => {
      //arrange
      const searchOptions = {
        searchTerm: ''
    };

    const expected = '';
    //act
    const result = makeSearchUrl(searchOptions);

    //assert
    assert.equal(result, expected);
});
