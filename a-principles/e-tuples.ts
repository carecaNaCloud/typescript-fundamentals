type User = [number, string];
const newUser: User = [1, "Ismael"]; // tuples guarantee the order
const newUser2: User = ["1", "Ismael"];

// but can be cheated
newUser.push(1);
