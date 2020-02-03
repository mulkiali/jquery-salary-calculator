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
  $('#employeesOut').on('click', '.item', deleteEmployee);
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
  
  employees.push(newEmployee);

  displayEmployee();
}
function displayEmployee(){
  console.log('in displayEmployee');
  let el = $('#employeesOut');
  el.empty();
  for(let i=0; i<employees.length; i++){
    el.append(`<tr>
    <td>${employees[i].firstName}</td>
    <td>${employees[i].lastName}</td>
    <td>${employees[i].id}</td>
    <td>${employees[i].jobTitle}</td>
    <td>${employees[i].annualSalary}</td>
    <td class="item"><button class="deleteButton">Delete</button></td>
    </tr>`);
  };
};

function deleteEmployee(){
  console.log('in deleteEmployee');
  // let el = $(this);
  // console.log('clicked on:', el);
  // console.log('my parent:' ,el.parent());
  
 
  
}