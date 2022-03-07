const {
    sum,
    sub,
    mult,
    divide
} = require("./math")

describe("Basic math operations test", () => {

    test("adds 10 + 10 to equal 20", () => {
        expect(sum(10, 10)).toBe(20)
    })

    test("subtracts 10 from 15 to equal 5", () => {
        expect(sub(15, 10)).toBe(5)
    })

    test("multiplies 5 by 4 to equal 20", () => {
        expect(mult(5, 4)).toBe(20)
    })

    test("divides 10 by 5 to equal 2", () => {
        expect(divide(10, 5)).toBe(2)
    })

})