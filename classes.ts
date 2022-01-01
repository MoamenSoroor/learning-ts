

class Customer {
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

const customer = new Customer(1, "moamen soroor");

const info = customer.GetInfo();
console.log(info);



// index signature
// -----------------------------------
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
  check(s: string) {
    return this[s] as boolean;
  }
}









class Box2 {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
class DerivedBox2 extends Box2 {
  otherContent: string = "?2";
}

class DerivedBox3 extends DerivedBox2 {
  otherContent: string = "?3";
}
class DerivedBox4 extends DerivedBox2 {
  otherContent: string = "?4";
}
class Other {
  content: string = "";
}


const base = new Box2();
const derived = new DerivedBox2();
const other = new Other();
const drived1 = new DerivedBox3()
const drived2 = new DerivedBox4()
// derived.sameAs(base); // error
// derived.sameAs(other); // error
derived.sameAs(drived1);
derived.sameAs(drived2);
drived1.sameAs(derived);
drived2.sameAs(derived);



// this -based type guards
// -----------------------------------------------------
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) { }
}
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
class Directory extends FileSystemObject {
  children: FileSystemObject[] = [];

}
interface Networked {
  host: string;
}
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");


if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}


// a common use is lazy validation
class Box12<T> {
  value?: T;
  hasValue(): this is { value: T } {
    return this.value != undefined;
  }
}
const box = new Box12();
box.value = "Gameboy";
box.value;
if (box.hasValue()) {
  box.value;
}