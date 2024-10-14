"use strict";
describe("Union Type", () => {
    it("Should support in TS", () => {
        let sample = "Rizki";
        console.log(sample);
        sample = true;
        console.log(sample);
        sample = 21;
        console.log(sample);
    });
    it("Should support typeof operator", () => {
        function proccess(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(proccess("Rizki")).toBe("RIZKI");
        expect(proccess(12)).toBe(14);
        expect(proccess(false)).toBe(true);
    });
});
