"use strict";
describe('Optional', () => {
    it("Should support in TS", () => {
        function sayHello(name) {
            if (name) {
                return `Halo ${name}`;
            }
            else {
                return `Halo`;
            }
        }
        console.log(sayHello("Rizki"));
        const name = undefined;
        console.log(sayHello(name));
    });
});
