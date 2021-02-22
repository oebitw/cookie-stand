'use strict';

// Seattle
const seattle = {
  cityName: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesSoldPerCustomer: 6.3,
  customersPerHour: [],
  workingHours: ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  cookiesSoldPerHour: [],
  seattleTotalCookiesSold: 0,

  // Sales
  getSales: function () {
    for ( let i = 0; i < this.workingHours.length; i++ ) {
      let cookie = Math.ceil( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.avgCookiesSoldPerCustomer );
      this.cookiesSoldPerHour.push( cookie );
      this.seattleTotalCookiesSold += cookie;
      console.log( this.cookiesSoldPerHour );
    }
  },

  //number of customers per hour
  randomCustomer: function () {
    this.customersPerHour = getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers );

  },


  render: function () {
    const parentElement = document.getElementById( 'City' );

    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;

    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );

    for ( let i = 0; i < 14; i++ ) {
      const liElement = document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent = `${this.workingHours[i]}:${this.cookiesSoldPerHour[i]} cookies .`;

    }

    const liElement = document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent = `Total: ${this.seattleTotalCookiesSold} Cookies`;



  }

};

//Invoke
seattle.getSales();

seattle.randomCustomer();

seattle.render();




// Tokyo
const tokyo = {
  cityName: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesSoldPerCustomer: 1.2,
  customersPerHour: [],
  workingHours: ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  cookiesSoldPerHour: [],
  tokyoTotalCookiesSold: 0,

  // Sales
  getSales: function () {
    for ( let i = 0; i < this.workingHours.length; i++ ) {
      let cookie = Math.ceil( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.avgCookiesSoldPerCustomer );
      this.cookiesSoldPerHour.push( cookie );
      this.tokyoTotalCookiesSold += cookie;
    }
  },

  //number of customers per hour
  randomCustomer: function () {
    this.customersPerHour = getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers );

  },


  render: function () {
    const parentElement = document.getElementById( 'City' );

    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;

    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );

    for ( let i = 0; i < 14; i++ ) {
      const liElement = document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent = `${this.workingHours[i]}:${this.cookiesSoldPerHour[i]} cookies .`;

    }

    const liElement = document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent = `Total: ${this.tokyoTotalCookiesSold} Cookies`;



  }

};

//Invoke
tokyo.getSales();

tokyo.randomCustomer();

tokyo.render();



//Dubai

const dubai = {
  cityName: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesSoldPerCustomer: 3.7,
  customersPerHour: [],
  workingHours: ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  cookiesSoldPerHour: [],
  dubaiTotalCookiesSold: 0,

  // Sales
  getSales: function () {
    for ( let i = 0; i < this.workingHours.length; i++ ) {
      let cookie = Math.ceil( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.avgCookiesSoldPerCustomer );
      this.cookiesSoldPerHour.push( cookie );
      this.dubaiTotalCookiesSold += cookie;
    }
  },

  //number of customers per hour
  randomCustomer: function () {
    this.customersPerHour = getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers );

  },


  render: function () {
    const parentElement = document.getElementById( 'City' );

    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;

    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );

    for ( let i = 0; i < 14; i++ ) {
      const liElement = document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent = `${this.workingHours[i]}:${this.cookiesSoldPerHour[i]} cookies .`;

    }

    const liElement = document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent = `Total: ${this.dubaiTotalCookiesSold} Cookies`;


  }

};

//Invoke
dubai.getSales();

dubai.randomCustomer();

dubai.render();


//Paris

const paris = {
  cityName: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesSoldPerCustomer: 2.3,
  customersPerHour: [],
  workingHours: ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  cookiesSoldPerHour: [],
  parisTotalCookiesSold: 0,

  // Sales
  getSales: function () {
    for ( let i = 0; i < this.workingHours.length; i++ ) {
      let cookie = Math.ceil( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.avgCookiesSoldPerCustomer );
      this.cookiesSoldPerHour.push( cookie );
      this.parisTotalCookiesSold += cookie;
    }
  },

  //number of customers per hour
  randomCustomer: function () {
    this.customersPerHour = getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers );

  },


  render: function () {
    const parentElement = document.getElementById( 'City' );

    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;

    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );

    for ( let i = 0; i < 14; i++ ) {
      const liElement = document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent = `${this.workingHours[i]}:${this.cookiesSoldPerHour[i]} cookies .`;

    }

    const liElement = document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent = `Total: ${this.parisTotalCookiesSold} Cookies`;


  }

};

//Invoke
paris.getSales();

paris.randomCustomer();

paris.render();


//Lima

const lima = {
  cityName: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesSoldPerCustomer: 4.6,
  customersPerHour: [],
  workingHours: ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  cookiesSoldPerHour: [],
  limaTotalCookiesSold: 0,

  // Sales
  getSales: function () {
    for ( let i = 0; i < this.workingHours.length; i++ ) {
      let cookie = Math.ceil( getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers ) * this.avgCookiesSoldPerCustomer );
      this.cookiesSoldPerHour.push( cookie );
      this.limaTotalCookiesSold += cookie;
    }
  },

  //number of customers per hour
  randomCustomer: function () {
    this.customersPerHour = getRandomInt( this.minHourlyCustomers, this.maxHourlyCustomers );

  },


  render: function () {
    const parentElement = document.getElementById( 'City' );

    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;

    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );

    for ( let i = 0; i < 14; i++ ) {
      const liElement = document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent = `${this.workingHours[i]}:${this.cookiesSoldPerHour[i]} cookies .`;

    }

    const liElement = document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent = `Total: ${this.limaTotalCookiesSold} Cookies`;


  }

};

//Invoke
lima.getSales();

lima.randomCustomer();

lima.render();


// Global Helper Function

function getRandomInt( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min ) + min );
}


