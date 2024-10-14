import { CustomerType } from "../src/enum";
describe('Enum', () => {
    it("Should support in TS", () => {
        const customer = {
            id: 1,
            name: "Rizki",
            type: CustomerType.GOLD
        };
        console.log(customer);
    });
});
