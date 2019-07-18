'use strict';


var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
function CookieStore(location, minCust, maxCust, avgCookie){
    this.location = location,
    this.minCust = minCust,
    this.maxCust = maxCust,
    this.avgCookie = avgCookie,
    
    this.cookiesSold = [],
    this.cookiePerHour();

    allStores.push(this);
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
    tFooter.innerHTML='';
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

CookieStore.renderAll= function() {
    var tbody = document.getElementById("tableData");
    console.log('not working');
    tbody.innerHTML = '';
    // tooter.innerHTML = '';
    // thead.innerHTML = '';
    for(var i=0; i < allStores.length; i++){
        allStores[i].render();

    }
}


function newStore(event) {
    event.preventDefault();
    
    
    var newName = event.target.store_name.value;
    var newMin = parseInt(event.target.min_cust.value);
    var newMax = parseInt(event.target.max_cust.value);
    var newAvg = parseInt(event.target.avg_cookies.value);
      
    var formStore = new CookieStore(newName, newMin, newMax, newAvg);
    
    formStore.render();
    footerData();
}


var firstAndPike = new CookieStore("First and Pike",23,65,6.3,);
var seaTac = new CookieStore("SeaTac Airport",3,24,1.2);
var seattleCenter = new CookieStore("Seattle Center",11,38,3.7);
var capitolHill = new CookieStore("Capitol Hill",20,38,2.3);
var alki =  new CookieStore("Alki",2,16,4.6);

function runAllStores() {
    headerData();
    CookieStore.renderAll();
    footerData();
}
runAllStores();

var storeForm = document.querySelector('form');
storeForm.addEventListener('submit', newStore);