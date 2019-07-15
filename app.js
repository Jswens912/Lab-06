'use strict';

var firstNdPike = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    hourly: [],
    hourlyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    hourlyCookies: function(){
        for( var i=0; i < hours.length; i++){
            this.hourly[i]=Math.floor(this.hourlyCustomers() * this.avgCookie);

        }
    },
    
}
// console.log(firstNdPike.hourlyCookies());


var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    hourly: [],
    hourlyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    hourlyCookies: function(){
        for( var i=0; i < hours.length; i++){
            this.hourly[i]=Math.floor(this.hourlyCustomers() * this.avgCookie);

        }
    },
}


var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    hourly:[],
    hourlyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    hourlyCookies: function(){
        for( var i=0; i < hours.length; i++){
            this.hourly[i]=Math.floor(this.hourlyCustomers() * this.avgCookie);

        }
    },
    
}


var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 4.6,
    hourly: [],
    hourlyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    hourlyCookies: function(){
        for( var i=0; i < hours.length; i++){
            this.hourly[i]=Math.floor(this.hourlyCustomers() * this.avgCookie);

        }
    },
    
}

var alki = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    hourly: [],
    hourlyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    hourlyCookies: function(){
        for( var i=0; i < hours.length; i++){
            this.hourly[i] = Math.floor(this.hourlyCustomers() * this.avgCookie);


        }
        

    },
    
}
// console.log
function generateData() {
    alki.hourlyCustomers();
    alki.hourlyCookies();
    seaTac.hourlyCustomers();
    seaTac.hourlyCookies();
    capitolHill.hourlyCookies();
    capitolHill.hourlyCustomers();
    firstNdPike.hourlyCustomers();
    firstNdPike.hourlyCookies();
    seattleCenter.hourlyCookies();
    seattleCenter.hourlyCustomers();
}


var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']







function storeData(location, id) {
    var locationData = document.getElementById(id);
    for(var liIndex = 0; liIndex < hours.length; liIndex++){
        var li = document.createElement("li");
        var listData = hours[liIndex]+": "  + location.hourly[liIndex] + " cookies.";
        console.log(listData);
        li.textContent = listData;
        locationData.appendChild(li);
    }

}


generateData();
storeData(alki, "alki");
storeData(capitolHill, "capitolhill");
storeData(firstNdPike, "firstandpike");
storeData(seattleCenter, "seattlecent");
storeData(seaTac, "seatac");











































































// var firstAndPike = cookieStores(23,65,6.3,"First and Pike");
// var seaTac = cookieStores(3,24,1.2,"SeaTac Airport")
// var seattleCenter = cookieStores(11,38,3.7,"Seattle Center");
// var capitolHill = cookieStores(20,38,2.3,"Capitol Hill");
// var alki = cookieStores(2,16,4.6,"Alki");

// function cookieStores(minCust, maxCust, avgCookie, location){
//     this.minCust = minCust,
//     this.maxCust = maxCust,
//     this.avgCookie = avgCookie,
//     this.location = location
//     this.cookiesSold = [];
//     this.customerPerHour = function(){
//         var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//         return(customers);
//     }
//     for(var i=0; i<hours.length; i++){
//         this.cookiesSold[i]=Math.floor(this.customerPerHour()*this.avgCookie)}};


// function storeData(location,cookiesSold){
//     var locationData=document.getElementById(id);
// }