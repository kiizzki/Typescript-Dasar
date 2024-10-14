describe('Optional', () => {
    it("Should support in TS", () => {
        function sayHello(name?: string) {
            if (name) {
                return `Halo ${name}`
            } else {
                return `Halo`
            }
        }

        console.log(sayHello("Rizki"))
        const name: string | undefined = undefined
        console.log(sayHello(name))

    })
})
