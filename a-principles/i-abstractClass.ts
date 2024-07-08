
type Role = 'user' | 'admin';

abstract class User {
  private name: string;
  private cpf: string;
  private address: string;
  private type: Role = 'user';

  constructor(name: string, cpf: string, address: string) {
    this.name = name;
    this.cpf = cpf;
    this. address = address; 
  }

  set access(type: Role) {
    this.type = type;
  }
  
  get access() : string {
    return this.type;
  }
}

class GeneralUser extends User {
  constructor(name: string, cpf: string, address: string) {
    super(name, cpf, address);
  }
}

const user = new GeneralUser("Ismael", "000.000", "Street");