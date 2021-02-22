'use strict';

let workingHours= ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let footerSales = [];
let totalCitiesSales = [];
let shopLocations=['Seattle','Tokyo','Dubai','Paris','Lima'];
// Global Helper Function

function getRandomInt( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min ) + min );
}

//Constructor Function

// let Shops=function ( cityName, minHourlyCustomers, maxHourlyCustomers, avgCookiesSoldPerCustomer ) {
//     this.cityName=cityName;
//     this.minHourlyCustomers=minHourlyCustomers;
//     this.maxHourlyCustomers=maxHourlyCustomers;
//     this.avgCookiesSoldPerCustomer=avgCookiesSoldPerCustomer;
//     this.customersPerHour=[];
//     this.cookiesSoldPerHour=[];
//     this.cookiesSales=0;
//     this.footerSales=[];
//     this.total=0;
// }
function Shops ( cityName, minHourlyCustomers, maxHourlyCustomers, avgCookiesSoldPerCustomer ) {
  this.cityName=cityName;
  this.minHourlyCustomers=minHourlyCustomers;
  this.maxHourlyCustomers=maxHourlyCustomers;
  this.avgCookiesSoldPerCustomer=avgCookiesSoldPerCustomer;
  this.customersPerHour=[];
  this.cookiesSoldPerHour=[];
  this.cookiesSales=0;
  this.footerSales=[];
  this.total=0;






}
Shops.prototype.getSales= function () {
  for ( let i = 0; i <workingHours.length; i++ ) {
    let cookie = Math.ceil( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.avgCookiesSoldPerCustomer );
    this.cookiesSoldPerHour.push( cookie );
    this.cookiesSales += cookie;
  }
};

Shops.prototype.randomCustomer = function () {
  this.customersPerHour.push( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) );
 
};

Shops.prototype.citiesTotal = function(){

  for( let i = 0; i <workingHours.length;i++ ){
    this.footerSales.push( this.cookiesSoldPerHour[i] );
  }
  footerSales.push( this.footerSales );
};


function tableHeader(){
  const parentElement = document.getElementById( 'City' );

  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );


  const tableElement = document.createElement( 'table' );
  tableElement.setAttribute( 'id', 'header' );
  articleElement.appendChild( tableElement );

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  const tdElement = document.createElement( 'th' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = 'Location/Time';

  for( let i = 0; i < workingHours.length;i++ ){
    const tdElement = document.createElement( 'th' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = workingHours[i];
  }
}


Shops.prototype.tableMain = function(){
  const parentElement = document.getElementById( 'header' );

  const tr1Element = document.createElement( 'tr' );
  parentElement.appendChild( tr1Element );

  const tdElement = document.createElement( 'td' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = this.cityName;
  for( let i = 0; i < workingHours.length; i++ ){
    const tdElement = document.createElement( 'td' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = this.cookiesSoldPerHour[i];
  }
};

function footerTotal(){
  for( let i=0;i<workingHours.length;i++ ){
    let sum=0;
    for ( let x=0;x<shopLocations.length;x++ ){
      sum+=footerSales[x][i];
    }
    totalCitiesSales.push( sum );
  }
  const parentElement = document.getElementById( 'header' );

  const tr1Element = document.createElement( 'tr' );
  parentElement.appendChild( tr1Element );

  const tdElement = document.createElement( 'th' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = 'Total';

  for( let i = 0; i < workingHours.length;i++ ){
    const tdElement = document.createElement( 'th' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = totalCitiesSales[j];
  }
}




//Invoke



const seattle = new Shops ( 'Seattle', 23, 65, 6.3 );
seattle.getSales();
seattle.randomCustomer();
tableHeader();
seattle.tableMain();
seattle.citiesTotal();




const tokyo = new Shops ( 'Tokyo', 3, 24, 1.2 );
tokyo.getSales();
tokyo.randomCustomer();
tokyo.tableMain();
tokyo.citiesTotal();



const dubai = new Shops ( 'Dubai', 11, 38, 3.7 );
dubai.getSales();
dubai.randomCustomer();
dubai.tableMain();
dubai.citiesTotal();


const paris = new Shops ( 'Paris', 20, 38, 2.3 );
paris.getSales();
paris.randomCustomer();
paris.tableMain();
dubai.citiesTotal();



const lima = new Shops ( 'Lima', 2, 16, 4.6 );
lima.getSales();
lima.randomCustomer();
lima.tableMain();
lima.citiesTotal();

footerTotal();
