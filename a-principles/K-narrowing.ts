interface User {
  login: string;
  password: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

function getCredential(account: User | Admin) : void {
  if ('isAdmin' in account) {
    console.log("Wecome Admin");
  } else {
    console.log('Welcome User');
  }
}

function logDate(today: Date | string) : void {
  if (today instanceof Date) {
    console.log('Are passaing a Date type');
  } else if (typeof today === 'string') {
    console.log('Passing date by string');
  } else {
    console.log('Never will be that!');
  }
}


// PREVENT FOR FUTURE IMPLEMENTATIONS

interface Circle {
  kind: 'Circle';
  radius: number
}

interface Square {
  kind: 'Square';
  side: number;
}

interface Rectangle { // implemented after
  kind: 'rectange';
  width: number;
  length: number;
}

type Shape = Circle | Square /* implmented after | Rectangle */ 

const area = (shape: Shape) : number => {
  switch(shape.kind) {
    case 'Circle':
      return Math.PI * shape.radius ** 2;
    case 'Square':
      return shape.side ** 2;
    default:
      const _futureImplementation: never = shape;
      return _futureImplementation;
  }
} 