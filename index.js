// Code your solution in this file!
let scuba = 42;

function distanceFromHqInBlocks(blocks) {
    let distance = Math.abs(blocks - scuba);
    return distance;
}

function distanceFromHqInFeet(blocks) {
    let value = distanceFromHqInBlocks(blocks);
    return value * 264;
}

function distanceTravelledInFeet(start, finish) {
    return Math.abs((finish - start) * 264);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return `cannot travel that far`;
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        let value = distance - 400;
        return value * 0.02;
    } else {
        return 0;
    }
}