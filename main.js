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
