import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const attrs = [
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (emp) => {
  return replaceAll(emp.empName, ' ', '-');
};

class EmpApi {
  static getAllEmps() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], emps));
      }, delay);
    });
  }

  static saveEmp(entity, attr) {
    attr = Object.assign({}, attr); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minEmpNameLength = 1;
        // if (emp.empName.length < minEmpNameLength) {
        //   reject(`Name must be at least ${minEmpNameLength} characters.`);
        // }

        if (emp.id) {
          const existingEmpIndex = emps.findIndex(a => a.id == emp.id);
          emps.splice(existingEmpIndex, 1, emp);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          emp.id = generateId(emp);
      
          emps.push(emp);
        }

        resolve(emp);
      }, delay);
    });
  }

  static deleteEmp(empId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfEmpToDelete = emps.findIndex(emp => emp.id == empId);
        debugger;
        emps.splice(indexOfEmpToDelete, 1);
        resolve(Object.assign([], emps));
      }, delay);
    });
  }
}

export default EmpApi;
