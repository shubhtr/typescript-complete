//////////////////////////////////////
// Type: any
//////////////////////////////////////
// any is a type that disables type checking and effectively allows all types to be used.

// The example below does not use any and will throw an error:


// Example without any
// let u = true;
// u = "string";   // ERROR: Type 'string' is not assignable to type 'boolean'
// Math.round(u);  // ERROR: Argument of type 'boolean' is not assignable to parameter of type 'number'


// Example with any
// Setting any to the special type any disables type checking:
let v: any = true;
console.log(v);
v = "string"; // no error as it can be "any" type
Math.round(v); // no erro as it can be "any" type
console.log(v);

//////////////////////////////////////
// Type: unknown
//////////////////////////////////////
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used,
let w: unknown = 1;

w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
} as { runANonExistentMethod: () => void }

// how can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // ERROR: object is of type 'unknown'
// if(typeof w === 'object' && w!= null) {
//     (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.
