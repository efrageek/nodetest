const myRestaurants = [];


//Finding if the incoming rest have the same name off some added rest.
const restNameChecker = rest => rest.name === restaurant.name;



function addRest (restaurant) {
    const chekedName = myRestaurants.some(restNameChecker);

    if (!chekedName) {
        myRestaurants.push(restaurant);
        return true
    }else {
        return false
    }
    
};

function listRest () {
    return  myRestaurants;
}

module.exports = {
    add: addRest,
    list: listRest
}