"use strict";
describe('Object', () => {
    it("Should support in TS", () => {
        const person = {
            id: "1",
            name: "Rizki",
        };
        console.log(person);
        console.log(person.hobbies);
        person.hobbies = "Coding";
        person.id = "2";
        person.name = "John";
        console.log(person);
    });
});
