class User {
  readonly id : number;
  private name : string;
  private email : string;
  private password : string;

  constructor(email : string, password : string) {
    this.id = Math.random()*100;
    this.email = email;
    this.password = password;
  }

  set setName(name: string) {
    this.name = name;
  } 
}

const u1 = new User("ismael@gmail.com", "12345");