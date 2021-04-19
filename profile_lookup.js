// 2:24:21

var contacts = [
    {
        "firstName": "Akira",
        "lastname": "Laine",
        "number": "5454543",
        "likes": ["Pizza","Coding", "Brownie Points"]
    },

    {
        "firstName": "Harry",
        "lastname": "Potter",
        "number": "321545315",
        "likes": ["Hogwarts","Magic", "Hagrid"]
    },

    {
        "firstName": "Sherlock",
        "lastname": "Holmes",
        "number": "531531881",
        "likes": ["Intriguing Cases","Violin"]
    },

    {
        "firstName": "Kristian",
        "lastname": "Vos",
        "number": "unknown",
        "likes": ["JavaScript","Gaming","Foxes"]
    }
];

function lookUpProfile(name,prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] == name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }

            else {
                return "The property doesn't exist"
            }

        }
    }
}

// Change these values to test your fucntion
var data = lookUpProfile("Akira","lastname");
console.log(data);