'use strict';
let total=0;
const seattle = {
  cityName: 'seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesSoldPerCustomer: 6.3,
  customersPerHour: [],
  workingHours: ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  randomCustomer: function () {
    this.customersPerHour = customers( this.minHourlyCustomers, this.maxHourlyCustomers );

  },
  render: function () {
    const parentElement = document.getElementById( 'City' );

    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;

    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );

    for( let i=0; i<14 ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${this.workingHours[i]}: ${Math.floor(this.customersPerHour[i]*this.avgCookiesSoldPerCustomer )}`;
      total= total+ Math.floor(this.customersPerHour[i]*this.avgCookiesSoldPerCustomer );

    }

    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;

    // for(let i = 0; i < this.likes.length; i++) {
    //     const liElement = document.createElement('li');
    //     ulElement.appendChild(liElement);
    //     liElement.textContent = this.likes[i];
    //   }



  }

};

//Invoke

seattle.randomCustomer();
seattle.render();
console.log( seattle.customersPerHour );




// Helper Function

function customers( min, max ) {
  let cuArr = [];
  for ( let i = 0; i < 15; i++ ) {
    let cu = Math.floor( Math.random() * ( max - min + 1 ) + min );
    cuArr.push( cu );
  }
  return cuArr;
}

// function sum (){

// }