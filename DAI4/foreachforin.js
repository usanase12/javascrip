const numberss = [1, 2, 3, 4, 5];

numberss.forEach(function(element, index) {
    console.log(`Element at index ${index} is ${element}`);
});

//
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// fo each is used in arrays
//for in is used in object

//nested array 
let arry = [[1,2],[3,4],5,6];
let lastIndex = arry[3];
console.log(lastIndex);
let arr = [["a","b"],["c","d"],"e"]
console.log(arr[1][1]);

// obect(for in)

const personn = {
    name: 'sando',
    age: 30,
    gender: 'female'
};

for (let key in personn) {
    console.log(key);//calling the keys 
}
    console.log(personn.name);//calling the value
    
    //nested object of for in

    const personnn = {
        name: 'sandrine',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Kigali',
            country: 'Rwanda'
        },
        contacts: {
            email: 'sando@example.com',
            phone: '0789146226'
        }
    };
    console.log(personnn.name);                     // Output: John
console.log(personnn.address.city);             // Output: Anytown
console.log(personnn['contacts']['email']);   
for(let key in personnn)  {
    console.log(key);
}