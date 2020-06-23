const myRestaurants = [];
const restaurantsNames = [];

function addRest (restaurant) {
    myRestaurants.push(restaurant);
    restaurantsNames.push(restaurant.name);
};

function listRest () {
    return  myRestaurants;
}

module.exports = {
    add: addRest,
    list: listRest
}