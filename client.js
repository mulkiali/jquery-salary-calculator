$(document).ready(onReady);
console.log('js');


// const employees =[ {
//   firstName: 'Jen',
//   lastName: 'Barber',
//   id: '4521',
//   jobTitle: 'Team Lead',
//   annualSalary: '80000',
//
// },
// {
//   firstName: 'Maurice',
//   lastName: 'Moss',
//   id: '8724',
//   jobTitle: 'Support Team',
//   annualSalary: '58000',
// },
// {
//   firstName: 'Roy',
//   lastName: 'Smith',
//   id: '9623',
//   jobTitle: 'Quality Assurance',
//   annualSalary: '48000',
// },
// ];


let employees = [];

function onReady(){
  console.log('in onReady');
  $('#submitButton').on('click', addEmployee);
};

function addEmployee(){
  console.log('in addEmployee');
  let newEmployee = {
    firstName: $( '#inFirstName' ).val(),
    lastName: $( '#inLastName' ).val(),
    id: $( '#inID' ).val(),
    jobTitle: $( '#inJobTitle' ).val(),
    annualSalary: $( '#inSalary' ).val()
  }
  console.log('adding:', newEmployee);
  
}