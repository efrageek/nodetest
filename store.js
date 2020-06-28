const e = require("express");

const myRestaurants = [];



function addRest (restaurant) {
    const chekedName = myRestaurants.some(rest => rest.name === restaurant.name);

    if (!chekedName) {
        myRestaurants.push(restaurant);
        return true
    }else {
        throw 'El nombre del restaurant ya existe'
    }
    
};

function listRest () {
    return  myRestaurants;
}

function listKindOfRest (tag) {
    
    const filterRests = myRestaurants.map( e => {
        
        if (tag == e.kidOfRestaurant) {
            
            return e
        }
    })

    return filterRests
}

module.exports = {
    add: addRest,
    list: listRest,
    kindRest: listKindOfRest
}