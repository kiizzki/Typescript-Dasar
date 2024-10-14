describe("Array", () => {
    it("Should same with JavaScript", () => {
        const names: string[] = ["rizki", "john", "kinm"]
        const numbers: number[] = [1, 2, 3]

        console.log(names)
        console.log(numbers)
    })

    it("Should be ReadonlyAraay", () => {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]

        console.log(hobbies[0])
        console.log(hobbies[1])
        // hobbies[0] = "Gaming"
    })

    it("Should be tuple Readonly ", () => {
        const person: readonly [string, string, number] = ["Mochammad", "Rizki", 17]

        console.log(person)
        console.log(person[0])
        console.log(typeof person[1])
        console.log(typeof person[2])

        // person[0] = "Rizki"
    })
})