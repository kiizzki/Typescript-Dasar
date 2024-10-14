describe('Type Alias', () => {
    it("Should support in TS", () => {
        const category = {
            id: 1,
            name: "Smartphone"
        };
        const product = {
            id: "1",
            name: "Samsung S24 Ultra",
            price: 12000000,
            category
        };
        console.log(category);
        console.log(product);
    });
});
export {};
