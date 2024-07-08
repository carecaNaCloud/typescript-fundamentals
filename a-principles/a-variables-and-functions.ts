// Typescript inplicity declare type of variable declaration
const person = {
  name: "Ismael",
  age: 31
}
// person.email = "ismaelbetzoletti@gmail.com"; // compile with some errors;
console.log(person.name);

let greetings: string = 'Hii';
// greetings = 1;  // Type 'number' is not assignable to type 'string'
console.log(greetings.replace('Hiii', 'Hello!')); // Give me only methods suggestions based on type


const login = (name: string, password: string) : void => {
  if (name === 'Ismael' && password === '1234') {
    console.log('Logged in');   
  } else {
    console.log('Not authorized');   
  }
}

// Good Practice to declare return map method 
const heroes = ["Spiderman", "Superman", "Green Lantern"];
heroes.map((hero) : string => {
  return (`Hero: ${hero}`);
})



//Declare return to never when is thoring an error is mentioned on official doc and enhace the code 
const handleERROR = () : never => {
  throw new Error('Turning type Error more cohesive')
}