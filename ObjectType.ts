// Extending 

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface GoodAddress extends BasicAddress {
  unitPlace: string
}

function showAddress(goodAddr: GoodAddress) {
  console.log(goodAddr);
}

showAddress({
  name: "value",
  street: "value",
  city: "value",
  country: "value",
  postalCode: "value",
  unitPlace: "asd"
});


// interface s can also extend from multiple types.
interface Colorful {
  color: string;
}
interface Circle2 {
  radius: number;
}

interface ColorfulCircle extends Circle2, Colorful {
  xPos: number, yPos: number
}



// Intersections

interface Colorful2 {
  color: string;
}
interface Circle2 {
  radius: number;
}

type ColorfulCircle2 = Colorful2 & Circle2;

function draw2(circle: Colorful2 & Circle2) {
  console.log(circle);
}


function draw3(circle: ColorfulCircle2) {
  console.log(circle);
}


// -------------------------------------
// Interfaces vs. Intersections
// ---------------------------------------
// the principle difference difference between the two is how conflicts are handled, and that difference is typically one of the
// main reasons why you'd pick one over the other between an interface and a type alias of an
// intersection type


// ------------------------------------
// Generic Object Types
// ------------------------------------

interface Box<T> {
  contents: T;
}

let b: Box<string> = { contents: "contents" };
let b2: Box<number> = { contents: 12 };

interface Apple { color: "Green" | "Red" }

type AppleBox = Box<Apple>;


