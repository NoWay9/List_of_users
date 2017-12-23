var maxValueEmployee = 10;

     
function addEmployee(){
  if (maxEmployee() >= maxValueEmployee || (averge()/maxEmployee()) > 2000){disableBtn(); return alert("Max value of employee or average salary more than 2000"); }

  var employeeName = prompt('Name employee:', 'James');
  var employeeLastname = prompt('Lastname employee:', 'Smith');
  var employeeSalary = prompt('Salary:', '$1000');
  var employeePosition = prompt('Position:', 'worker');

  if(duplicatesName(employeeName) == false)return alert('Name is duplicate');
  if(duplicateLastName(employeeLastname) == false)return alert('Lastname is duplicate');

  if(validationName(employeeName) && validationLastName(employeeLastname) && validationSalary(employeeSalary) && validationPosition(employeePosition))
  alert("You add new employee");
  else return alert("Wrong data!Please enter correct data");

  var newLi = document.createElement('li');
  var appendNewLi = document.getElementsByClassName('employeeList')[0].appendChild(newLi);
  var newspan1 = document.createElement('span');
  newspan1.className = 'employeeFirstName';
  newspan1.innerText = employeeName;
  var newspan2 = document.createElement('span');
  newspan2.className = 'employeeLastName';
  newspan2.innerText =employeeLastname;
  var newspan3 = document.createElement('span');
  newspan3.className = 'employeeSalary';
  newspan3.innerText = employeeSalary;
  var newspan4 = document.createElement('span');
  newspan4.className = 'employeePosition';
  newspan4.innerText = employeePosition;

 appendNewLi.appendChild(newspan1);
 appendNewLi.appendChild(newspan2);
 appendNewLi.appendChild(newspan3);
 appendNewLi.appendChild(newspan4);

}

/*Validation prompt input*/

function validationName(name){
    if(name != ''){
   if(isNaN(name))return true;
   else return false;}
   else return false;
}

function validationLastName(lastname){
    if (lastname != ''){
    if(isNaN(lastname))return true;
    else return false;}
    else return false;
}

function validationSalary(salary){
    if(salary != ''){
    var RegExp = /\$[0-9]/;
    if(RegExp.test(salary)) 
    return true;
    else return false;}
    else return false;
}

function validationPosition(position){
    if(position != ''){
    if(isNaN(position))return true;
    else return false;}
    else return false;
}

/*Number of employee and average salary*/

function numberEmployee(){
    document.querySelector('.numberEmployee span').innerHTML = maxEmployee();  
    var avergeSum =  averge()/maxEmployee();
    document.querySelector('.avarageSalary span').innerHTML = avergeSum;
}


function averge(){
   var $salary = document.getElementsByClassName('employeeSalary');
   var sum = 0;
   
   for(var i=0;i<$salary.length;i++){
      sum += Number($salary[i].textContent.substring(1));
   }
   return sum;
}

/*Max value of employee*/

function maxEmployee(){
   var rea = document.getElementsByTagName('li');
   return rea.length; 
}

function disableBtn(){
   var btn = document.getElementsByClassName('addEmployee')[0];
   btn.setAttribute('disabled', 'disabled');
}

/* Duplicates check*/
function duplicatesName(firstname){
   var $employeenames = document.getElementsByClassName('employeeFirstName');
   var arr = [];
   for(var i=0;i<$employeenames.length;i++){
    arr[i] = $employeenames[i].textContent
       }

      if (arr.indexOf(firstname) >= 0)return false;
      else return true;
}


function duplicateLastName(lastname){
    var $employeelast = document.getElementsByClassName('employeeLastName');
    var arr1 = [];
    for(var j=0; j<$employeelast.length;j++){
        arr1[j] = $employeelast[j].textContent;
    }
    if(arr1.indexOf(lastname) >= 0)return false;
    else return true;
}



function setMaxEmployee(){
    maxValueEmployee = prompt("Set the limit of employees:", 10);
    return maxValueEmployee;
}
setMaxEmployee();