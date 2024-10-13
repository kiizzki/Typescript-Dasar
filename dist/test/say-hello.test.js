import { sayHello } from "../src/say-hello";
describe("sayHello", () => {
    it("should return Hello Rizki", () => {
        expect(sayHello("Rizki")).toBe("Hello Rizki");
    });
});
