'use strict';

var firstNdPike = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    dailyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    dailyCookies: function(){
        var cookies = Math.floor(this.dailyCustomers() * this.avgCookie)
        return(cookies);

    },
    
}
// console.log(firstNdPike.dailyCookies());


var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    dailyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    dailyCookies: function(){
        var cookies = Math.floor(this.dailyCustomers() * this.avgCookie)
        return(cookies);

    },
    
}


var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    dailyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    dailyCookies: function(){
        var cookies = Math.floor(this.dailyCustomers() * this.avgCookie)
        return(cookies);

    },
    
}


var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 4.6,
    dailyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    dailyCookies: function(){
        var cookies = Math.floor(this.dailyCustomers() * this.avgCookie)
        return(cookies);

    },
    
}

var alki = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    dailyCustomers: function(){
        var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return(customers);
    },
    dailyCookies: function(){
        var cookies = Math.floor(this.dailyCustomers() * this.avgCookie)
        return(cookies);

    },
    
}
console.log