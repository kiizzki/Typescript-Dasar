import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/seller"

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

    it("Should support Indexable Interface for number index", () => {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Mochammad", "Rizki", "John"]

        console.log(names)
        console.log(names[0])
        console.log(names[1])
        console.log(names[2])
    })

    it("Should support Indexable Interface for non number index", () => {
        interface StringDictionary {
            [key: string]: string
        }

        const person: StringDictionary = {
            "name": "Rizki",
            "address": "Indonesia"
        }

        expect(person["name"]).toBe("Rizki")
        expect(person["address"]).toBe("Indonesia")
    })

    it("Should support Extends Interface", () => {
        const employee: Employee = {
            id: "SS12",
            name: "Rizki",
            division: "IT"
        }

        console.log(employee)

        const manager: Manager = {
            id: "SS1",
            name: "Rizki",
            division: "IT",
            numberOfEmployees: 12
        }

        console.log(manager)
    })
})
