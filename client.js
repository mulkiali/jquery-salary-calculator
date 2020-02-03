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
  $('#employeesOut').on('click', '.button', deleteEmployee);
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

$( '#inFirstName' ).val(''),
$( '#inLastName' ).val(''),
$( '#inID' ).val(''),
$( '#inJobTitle' ).val(''),
$( '#inSalary' ).val('')

calculateMonthlyTotal();
let el= $('#monthlyTotal');
el.empty();el.append(`${'#monthlyTotal'}`)
  
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
    <td class="button"><button class="deleteButton">Delete</button></td>
    </tr>`);
  };
};
function calculateMonthlyTotal(){
let calc = 0;
for(let i=0; i<employees.length; i++){
  calc+=(employees[i].annualSalary / 12)
}
monthlyTotal = calc;
if(monthlyTotal > 20000){
  document.getElementById("monthlyTotal").style.backgroundColor = "red";
}
}

function deleteEmployee(){
  console.log('in deleteEmployee');
  let el = $(this);
 
  let string = el.parent()[0].innerText;
  let index = string.lastIndexOf('');
  string = string.substring(0, index);
  console.log(string);
  
  
 
  
  
  
 
  
}