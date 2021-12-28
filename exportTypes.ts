
export class Customer {
  id: number;
  name: string;

  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }

  GetInfo(): string {
    return `Customer : ${this.id} ,  ${this.name}`;
  }
}
