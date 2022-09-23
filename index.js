// Import stylesheets
import './style.css';
const appDiv = document.getElementById('app');

// Decorator function Example

const bioObject = { name: 'Ashil jayaraj' };
// To add new property on the bio object called 'Age': 26

const decoratorFn = (age) => {
  // Its a function returning new function
  return (bio) => {
    bio['age'] = age;
  };
  // This returned function just assign a key value pair on the object.
};

decoratorFn(26)(bioObject);
// onthe above line we are passing to function parameters
// 26 will be considered as Line no 12: age
// bioObject considered as Line no 14: obj (Argument)

console.log('bio object ', bioObject);

appDiv.innerHTML = `<h1>JS Starter</h1>`;
