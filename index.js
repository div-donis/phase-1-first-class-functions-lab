// Code your solution in this file!

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(){
    const update = drivers.slice(0, 2);
    return update;
}

const returnLastTwoDrivers = function(){
    const update2 = drivers.slice(2, 5);
    return update2;
}

let selectingDrivers  = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(x){
    function fare(){
        return x * x;
    }
    return fare;
}

const fareDoubler = function fare(z){
    return z * 2;  
}

const fareTripler = function fare(y){
    return y * 3;
}

function selectDifferentDrivers(drivers, select){
    return select();
}



