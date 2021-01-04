// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// }; 

// console.squareArrow= (x) => x *x ; 

// console.log(squareArrow(4));

const add = (a , b) => {
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: ' Zohair',
    cites: ['San Franciso', 'New Mexico', 'Paris'],
    printPlacesLived() {
        return this.cites.map((city) => this.name + ' has lived here ' + city)
    }
};

console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
    number: [10, 20, 101],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number)=> number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());