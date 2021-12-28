
// Property Modifiers

// Optional Properties

interface MyShape { }

interface PaintOption {
  shape: MyShape,
  xPos?: number,
  yPos?: number
}
function paintShape(opts: PaintOption) {
  console.log(opts);
}

paintShape({ shape: {} });
paintShape({ shape: {}, xPos: 10, yPos: 20 });
paintShape({ shape: {}, xPos: 10 });


// setting defaults of absent  pattern in ts

function paintShape2(opts: PaintOption) {
  let x = opts.xPos === undefined ? 0 : opts.xPos;
  let y = opts.yPos === undefined ? 0 : opts.yPos;
  console.log(x, y);
}


//  a destructuring pattern
// ---------------------------------------

function paintShape3({ shape: sh, xPos: x, yPos: y }: PaintOption) {
  console.log(x, y);
}
// a destructuring pattern with defaults
function paintShape4({ shape: sh, xPos: x = 0, yPos: y = 0 }: PaintOption) {
  console.log(x, y);
}






// readonly Properties
// --------------------------------------
// Using the readonly modifier doesn't necessarily imply that a value is 
// totally immutable - or in
// other words, that its internal contents can't be changed. It just means
// the property itself can't be rewritten to.

interface ReadOnlyData {
  readonly data: string
}

function MyTryToReadAndWrite(x: ReadOnlyData) {
  console.log(x.data);
  //x.data = "hello world"; // error can't write to property
}



interface Home {
  name: string
}

interface City {
  readonly home: Home
}

function MyTryToReadAndWriteNestedProp(x: City) {
  console.log(x.home);
  // x.home = { name="asdf" }; // can't assign read only property
  x.home.name = "asdf"; // nested properties can be changed 
}


// Index Signatures
// ------------------------------------

interface NewPerson {
  [index: string]: string,
  name: string,
  petName: string,
  workName: string,
  // age:number, // error: Property 'age' of type 'number' is not 
  //assignable to 'string' index type 'string'

}

function PrintNewPerson(person: NewPerson) {
  let value = person["name"];
  for (const key in person) {
    const value = person[key];
    console.log(value);
  }
}


interface NewPerson2 {
  [index: string]: string | number | boolean,
  name: string,
  petName: string,
  workName: string,
  age: number,
  isAdult: boolean
}

function PrintNewPerson2(person: NewPerson2) {
  for (const key in person) {
    switch (key) {
      case "name":
        let value1 = person[key];
        console.log(value1);
        break;
      case "petName":
        const value2 = person[key];
        break;
      case "workName":
        const value3 = person[key];
        break;
      case "age":
        const value4 = person[key];
        break;
      case "isAdult":
        const value5 = person[key];
        break;
    }
  }
}
