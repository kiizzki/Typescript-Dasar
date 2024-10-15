describe('Interface', () => {
    it("Should support in TS", () => {
        const seller = {
            id: 1,
            name: "Rizki",
            address: "Indonesia",
            nib: "1234567890",
            npwp: "12.345.678.9-012.345"
        };
        console.log(seller);
        seller.name = "Mochammad Rizki";
        console.log(seller);
    });
    it("Should no errors", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(11, 2)).toBe(13);
    });
    it("Should support Indexable Interface for number index", () => {
        const names = ["Mochammad", "Rizki", "John"];
        console.log(names);
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
    });
    it("Should support Indexable Interface for non number index", () => {
        const person = {
            "name": "Rizki",
            "address": "Indonesia"
        };
        expect(person["name"]).toBe("Rizki");
        expect(person["address"]).toBe("Indonesia");
    });
});
export {};
