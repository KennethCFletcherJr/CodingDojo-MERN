const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


// BEFORE ES6
var email = person.email;
var firstAnimal = animals[0];


// AFTER ES6
const { email } = person;
const [firstAnimal] = animals;
console.log(email);
// => bob@marley.com
console.log(firstAnimal);
// => horse

var email = person.email;
var password = person.password;
var firstAnimal = animals[0];
var secondAnimal = animals[1];
var thirdAnimal = animals[2];

const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;


/* Name Conflicts
What if my current scope already has a variable of the same name of
a property that I'm extracting from an object? */

const password = '12345';
const { password } = person;

/* 
This will certainly cause conflict. Because password exists before destructuring and is a const this will throw an error: SyntaxError: Identifier 'password' has already been declared. 

So do we have to fallback to this ? */

const hashedPassword = person.password;
const { hashedPassword } = person;

/* 
That first example will work, but it's unnecessary.

The second example won't throw an error, but it won't have the information you expect either.

When destructuring from objects the property names must be matched exactly, so in this example, because hashedPassword does not exist on our person object, it will be undefined. */

const password = '12345';
const { password: hashedPassword } = person;


/* Specifying the property name, password, will access the value of that property on our object. The colon : after the property name followed by your new variable redirects the value of password to be held in hashedPassword, thereby eliminating the aforementioned identifier conflict.

Nested Destructuring
Often we'll be working with much more complex content and we want to take advantage of destructuring these nested structures. For this next example we'll modify our person object to have an array of addresses. */

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};


const { addresses: [whiteHouse, sherlock] } = person;


const { addresses: [, { city: london }] } = person;
console.log(london);
// => London



/*The above example will produce an error. We skipped so many addresses that the final position doesn't have an address object. Attempting to destructure from undefined or null throws: TypeError: Cannot destructure property 'city' of 'undefined' or 'null'.
Destructuring simplifies extracting information from objects and arrays, allowing for a cleaner, more succinct codebase.We're not done learning about destructuring but we need to understand a couple other features before we can fully utilize it. */


/* Rest / Spread
ES6 provides us with a new operator, ..., that is context dependent.Its purpose is to capture the rest of a data set, or to spread content of an existing structure.

    Destructuring
Now that we understand using rest and spread we can work it into our destructuring.Remembering our array example from the destructuring chapter we wanted to extract the first couple animals from our list. */


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal] = animals;

const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
otherAnimals
// => ['fish', 'cat', 'bird']

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

//Grabbing firstName and lastName from person is easy, along with assigning all other properties to a 'catchall'.

    const { firstName, lastName, ...attributes } = person;
/* copy
Using spread we can quickly make complete copies of objects or arrays. */

const personCopy = { ...person };

// const animalCopy = [...animal];
/* copy
There are some limitations.The copy is shallow, so any complex or nested structures with objects references will still point to the same object.We'll use our person objects to demonstrate. */

const personCopy = { ...person };
personCopy === person
// => false
personCopy.addresses === person.addresses
// => true


//NESTED STRUCTURES WITH OBJECT REFERENCES WILL STILL POINT TO THE SAME OBJECT??? EXAMPLE????
/* There are some limitations.The copy is shallow, so any complex or nested structures with objects references will still point to the same object.We'll use our person objects to demonstrate. */

const personCopy = { ...person };
personCopy === person
// => false
personCopy.addresses === person.addresses
// => true


/* Arrow Functions
Understanding and utilizing anonymous functions is important to becoming a skilled JavaScript developer.An anonymous function is simply a function without a name.ES6 introduces a new shortened syntax for writing anonymous functions that is the focus of this chapter.

Function Keyword
Consider this sayHello function assigned to a variable. */

var sayHello = function (name) {
    console.log('Hello ' + name);
};
/* copy
Utilizing ES6 arrow functions, colloquially fat arrow functions, we can rewrite it as such:
 */
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};
/* copy
Notice we've omitted the function keyword and now have an arrow (=>) pointing to the function body. Interesting, but what benefits does this provide other than less typing?

For simple methods we can refine this example further.Single parameters don't need parentheses and with the function body being a single statement we can remove the curly braces. */

const sayHello = name => console.log(`Hello ${name}`);
/* copy
Concise.More complex functions will need a more complete body({}), and multiple parameters will require parentheses.Another benefit of utilizing arrow functions for simple expressions is implicit returns.Let's create a new example. */

var square = function (n) {
    return n * n;
};
/* copy
will become */

const square = n => n * n;
/* copy
Traditional functions require explicit returns, such as in the first square.With arrow functions the result of our expression, n * n, is implicitly returned to the caller.



Arrow functions give us the ability to shorten the syntax of returning an object as well, However, there is one piece of syntax we need in order to return an object.Let's look at the example below. */

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// surrounding the implicit return with parentheses solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' }); copy
/* Context
Fancy syntax isn't the only change with arrow functions. They also inherit context from the parent scope. To demonstrate this let's create a card Deck class. */

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

//We'll start refactoring for a more functional approach using forEach, but continue using traditional anonymous functions.

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(function (suit) {
            faces.forEach(function (face) {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

/* Creating a new Deck will now result in a TypeError: TypeError: Cannot read property 'createCard' of undefined, because this in our anonymous functions don't have the same context as our loops.

We can fix this issue with arrow functions like so: */

class Deck {
    constructor() {
    ... //copy variables from previous code block
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}
/* copy
Arrow functions don't create their own context, it looks to the enclosing scope for that information. Therefore this should now refer to the Deck instance, which has a createCard method

Conclusion
Arrow functions provide a simpler syntax with implicit returns for succinct expressions.Additionally they inherit context from parent scopes.While this is great much of the time there are instances when you want context to change, so be aware of how an arrow function might affect your code. */




