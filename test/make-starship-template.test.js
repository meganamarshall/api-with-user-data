import { makeListTemplate } from '../src/starships/starship-components.js';
const test = QUnit.test;
QUnit.module('make starship list')

test('make starship template', assert => {
    //arrange
    const starship = {
        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3500000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "165",
        "passengers": "600",
        "cargo_capacity": "3000000",
        "consumables": "1 year",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "corvette",
        "pilots": [],
        "films": [
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T14:20:33.369000Z",
        "edited": "2014-12-22T17:35:45.408368Z",
        "url": "https://swapi.co/api/starships/2/"
    };
    const expected = /*html*/
    `<li>
    <h2>Name: CR90 corvette</h2>
    <span class="favorite-symbol">⊛</span>
    <h3>Model: CR90 corvette</h3>
    <h3>Manufacturer: Corellian Engineering Corporation</h3>
    <h3>Cost: 3500000</h3>
    </li>`;

    //act
    const result = makeListTemplate(starship);

    //assert
    assert.htmlEqual(result, expected)

})