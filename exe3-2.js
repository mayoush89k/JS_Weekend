let busStops = [{
    getIn: 10,
    getOff : 0
},{
    getIn: 2,
    getOff : 4
},{
    getIn: 4,
    getOff : 2
},{
    getIn: 5,
    getOff : 3
},{
    getIn: 8,
    getOff : 10
},{
    getIn: 4,
    getOff : 8
},{
    getIn: 0,
    getOff : 1
},
]

let passengerCounter = 0;

for(let i = 0 ; i < busStops.length ; i++){
    passengerCounter += busStops[i].getIn;
    console.log("Get in ", busStops[i].getIn, " -> " , passengerCounter);
    passengerCounter -= busStops[i].getOff;
    console.log("Get Out ", busStops[i].getOff, " -> " , passengerCounter);
}

console.log("The Bus has Arrived to the Central Bus Station and " , passengerCounter , " passengers are Still in the bus");