const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
let insectusEmployees = contacts.filter(ele => ele.company == "INSECTUS")
//console.log(insectusEmployees);

//2. an array all of the contacts, with only the name property
let employeeNames = contacts.map(ele => ele.name)
//console.log(employeeNames);

//3. an array of all of the contacts over the age of 50
let employeesOver50 = contacts.filter(ele => ele.age > 50)
//console.log(employeesOver50);

//4. the first ten contacts when alphabetically ordered by name
let first10Alphabetically = contacts.sort((a, b) => a.name.localeCompare(b.name));
//console.log(first10.slice(0, 10));

//5. the oldest person's name
let employeesByAge = contacts.sort((a, b) => b.age - a.age)
//console.log(employeesByAge[0].name);

//6. the contact id with the name Isabella Burke
let isabella = contacts.find(ele => ele.name == "Isabella Burke")
//console.log(isabella.id);

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
let firstNameLastNameEmployees = contacts.map(ele => {
    let firstName = ele.name.split(" ")[0]
    let lastName = ele.name.split(" ")[1]
    delete ele.name
    ele.firstName = firstName
    ele.lastName = lastName
    return ele
})
//console.log(firstNameLastNameEmployees);

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
let contactsWithFriends = () => {
    contacts.forEach(ele => {
        let foundFriends = []
        ele.friends.forEach(friendId => {
            contacts.find(contact => {
                if (contact.id == friendId) {
                    console.log(contact);
                    foundFriends.push(contact)
                }
            })
        })
        ele.friends = foundFriends
    })
    console.log(contacts.slice(0, 5).friends);
}
contactsWithFriends()
