describe("Any", () => {
    it("Should support in ts", () => {
        const person: any = {
            id: 1,
            name: "Rizki",
            age: 17
        }
        person.address = "Indonesia, Tangerang, Banten"
        console.log(person.name)
        console.log(person)
    })
})