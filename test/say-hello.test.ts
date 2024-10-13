import { sayHello } from "../src/say-hello";

describe("sayHello", (): void => {
    it("should return Hello Rizki", (): void => {
        expect(sayHello("Rizki")).toBe("Hello Rizki")
    })
})