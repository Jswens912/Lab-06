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
console.log(firstNdPike.dailyCookies());
