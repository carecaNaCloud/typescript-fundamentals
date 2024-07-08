interface repositoyFactoryInterface {
  dbUrl: string;
  dbName?: string; 
  connect: (userName: string, password: string) => void
}

const connection: repositoyFactoryInterface = {
  dbUrl: 'https://mongoDb:exemple.com',
  connect: (username: string, password: string) : void => {
    console.log(`${username} connected`);
  }
}

interface User {
  name: string;
  email: string;
  password: string;
} 
// Extending an interface
interface Admin extends User {
  restrictedAccess: boolean
}
// Adding fields to an existing interface
interface User {
  restrictedAccess: boolean;
}