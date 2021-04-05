// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.sqrt(((someValue - 42)**2));
}

function distanceFromHqInFeet(someValue) {
    return Math.sqrt(((someValue - 42)**2))*264;
}

function distanceTravelledInFeet(num1, num2) {
    return Math.sqrt((((num2-num1))**2))*264;
}

function calculatesFarePrice(start, destination) {
    let distance = Math.sqrt((start-destination)**2)*264
    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        return ((distance-400)*2)/100;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}