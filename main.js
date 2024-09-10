console.log("--------Lab1---------");
let User = {
    name: "Lama",
    email: "ilamaabdullah77@gmail.com",
    id: 1,
    available: false,
    address: {
        place: "Riyadh",
        neighborhood: "Al Narjs",
        postalcode: 13328,
        city: {
            name: "Saudi Arabia",
            code: "Riyadh"
        }
    },
    skills: ["HTML", "CSS", "JavaScript"],

    checkAvailability: function() {
        return this.available ? "User is available for work"  : "User is not available for work";
    }
};
console.log(User);
console.log(User.name);

User.id = 2;
console.log(User.id);

console.log(User.email);
delete User.email;
console.log(User);

console.log(User.checkAvailability());
User.available = true;
console.log(User.checkAvailability());

console.log(User.address);

console.log(User.address.city.name);

console.log(User.skills[2]);

console.log(User.skills.join(", "));

console.log("===================================");
console.log("-----------------Lab2--------------");

const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

const blueEyes = characters.find(ele => ele.eye_color === "blue").name;
console.log(blueEyes);  

const gender = characters.find(ele => ele.mass > 50).gender;
console.log(gender);  

const height = characters.filter(ele => ele.height < 200);
console.log(height);

const male = characters.filter(ele => ele.gender === "male");
console.log(male);

const names = characters.map(ele => ele.name);
console.log(names);

const allHeights = characters.map(ele => ele.height);
console.log(allHeights);

const mass = characters.slice().sort((a, b) => a.mass - b.mass);
console.log(mass);

const sortHeight = characters.slice().sort((a, b) => b.height - a.height);
console.log(sortHeight);

const massOver = characters.every(ele => ele.mass > 40);
console.log(massOver);  

const everyShorter = characters.every(ele => ele.height < 200);
console.log(everyShorter);  

const hasBlueEyes = characters.some(ele => ele.eye_color === "blue");
console.log(hasBlueEyes);  

const taller = characters.some(ele => ele.height > 210);
console.log(taller);  
