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
        seller.nib = "1233";
    });
});
export {};
