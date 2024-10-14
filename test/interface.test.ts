import { Seller } from "../src/interface"

describe('Interface', () => {
    it("Should support in TS", () => {
        const seller: Seller = {
            id: 1,
            name: "Rizki",
            address: "Indonesia",
            nib: "1234567890",
            npwp: "12.345.678.9-012.345"
        }

        console.log(seller)
        seller.name = "Mochammad Rizki"
        console.log(seller)
    })


    it("Should no errors", () => {
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(11, 2)).toBe(13)
    })
})
