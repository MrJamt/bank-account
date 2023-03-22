//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total = 0;
    this.estado = false;
  }

  open() {
    if(this.estado != true)
    {
    this.estado = true;
    this.total =0;
    }
  else
    throw new ValueError();
    
  }

  close() {
    if(this.estado == true)
    this.estado = false;
  else
    throw new ValueError();
    
  }

  deposit(monto) {
    if(this.estado == true)
      this.total += monto;
    else
      throw new ValueError();
    
  }

  withdraw(monto) {
    if(monto>this.total || this.estado!=true || monto<0)
        throw new ValueError();

    if(this.estado == true)
      this.total -= monto;
    
  }

  get balance() {
    if(this.estado == true)
      return this.total;
    else
      throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
