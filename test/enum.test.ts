import { Customer, CustomerType } from "../src/enum"

    describe('Enum', () => {
        it("Should support in TS", () => {
            const customer: Customer = {
                id: 1,
                name: "Rizki",
                type: CustomerType.GOLD
            }

            console.log(customer)
        })

    })
