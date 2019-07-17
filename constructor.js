'use strict';


var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore(location, minCust, maxCust, avgCookie){
    this.location = location,
    this.minCust = minCust,
    this.maxCust = maxCust,
    this.avgCookie = avgCookie,
    
    this.cookiesSold = [],
    this.cookiePerHour();
}


 CookieStore.totalData= [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

CookieStore.prototype.customerPerHour = function(){
    var customers= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return(customers);
};

CookieStore.prototype.cookiePerHour = function(){
    for(var i=0; i<hours.length; i++){
     this.cookiesSold[i]=Math.floor(this.customerPerHour()*this.avgCookie);
    }
};



function headerData() {
    var thead = document.getElementById("table_head");
    var td = document.createElement("th");
    td.textContent = "Stores";
    thead.appendChild(td);
    for(var thIndex = 0; thIndex < hours.length; thIndex++){
        var td = document.createElement("th");
        td.textContent = hours[thIndex];
        thead.appendChild(td);
        }  
        td = document.createElement("th");
        td.textContent = "Daily Totals.";
        thead.appendChild(td);
    };
    

function footerData() {
    var tFooter = document.getElementById("table_footer");
    var tf = document.createElement("th");
    tf.textContent = "Hourly Totals";
    var sum = 0;
    tFooter.appendChild(tf);
    for(var i=0; i < hours.length; i++){
        var tf = document.createElement("th");
        tf.textContent = CookieStore.totalData[i];
        sum += CookieStore.totalData[i];
        tFooter.appendChild(tf);
    }  
    tf = document.createElement("th");
    tf.textContent = sum;
    tFooter.appendChild(tf);
}



CookieStore.prototype.render = function (){
    var cookieTotal = 0;
    var tbody = document.getElementById("tableData");
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    /// Get location
    var tdLocation = document.createElement("td");
    tdLocation.textContent = this.location;
    tr.appendChild(tdLocation);
    //create table data
    for(var i=0; i<hours.length; i++){
        var hourlyCookies = this.cookiesSold[i];
        cookieTotal += hourlyCookies;
        CookieStore.totalData[i] += hourlyCookies;
        var cookieHourlyData = document.createElement('td');
        cookieHourlyData.textContent = hourlyCookies;
        tr.appendChild(cookieHourlyData);
      }
      var totalDailyCookie = document.createElement('td');
      totalDailyCookie.textContent = cookieTotal;
      tr.appendChild(totalDailyCookie);
    };     



var firstAndPike = new CookieStore("First and Pike",23,65,6.3,);
var seaTac = new CookieStore("SeaTac Airport",3,24,1.2);
var seattleCenter = new CookieStore("Seattle Center",11,38,3.7);
var capitolHill = new CookieStore("Capitol Hill",20,38,2.3);
var alki =  new CookieStore("Alki",2,16,4.6);

headerData();
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
footerData();
