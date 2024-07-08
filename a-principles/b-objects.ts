type Address = {
  number: number,
  street: string,
  city: string,
  state: string,
  zipCode: string
}

type CardDetails = {
  number: string,
  validationDate: string,
}

type User = CardDetails & {
  readonly id: string,  // readonly property make the attribute unmodifiable
  name: string,
  email: string,
  age?: number, // Make that attribut not required
  // addres: Address, // Already don't know if its vallid or good practice
  isActive: boolean,
}

const getUser = (data: User) : void => {
  console.log(`
    User: ${data.name} \n
    email: ${data.email} \n
    isActive: ${data.isActive} \n
    `);
}

const fetchedData = {
  id: '1234567',
  name: 'Ismael',
  email: 'ismaelbetzoletti@gmail.com',
  age: 31,
  isActive: true
}