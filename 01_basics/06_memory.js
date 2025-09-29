// Stack (Primitive), Heap (Npn-Primitive)

// Stack
let myYouTubename = "VivekKKumar"

let anotherName = myYouTubename           // its create copy of the main variable and make change in the duplicate one not in the original one
anotherName = "BadalKumar"

console.log(myYouTubename);
console.log(anotherName);


// Heap
let userOne = {
    email: "vivekumar@gmail.com",
    upi: "sbi@upi"
}

let userTwo = userOne                      // its directly make changes in the original one
userTwo.email = "badalkumar@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)