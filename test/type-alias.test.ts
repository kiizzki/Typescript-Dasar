import { Category, Product } from "../src/type-alias"

describe('Type Alias', () => {
    it("Should support in TS", () => {
        const category: Category = {
            id: 1,
            name: "Smartphone",
            description: "Flagship Smartphone"
        }

        const product: Product = {
            id: "1",
            name: "Samsung S24 Ultra",
            price: 12000000,
            category
        }

        console.log(category)
        console.log(product)
    })
})
