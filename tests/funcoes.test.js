const {add, sub, mult, div} = require("../src/funcoes")

test("5 mais 5 é igual a 10", () => {
    expect(add(5,5)).toBe(10);
})

test("5 menos 5 é igual a 0", () => {
    expect(sub(5,5)).toBe(0);
})

test("5 vezes 5 é igual a 25", () => {
    expect(mult(5,5)).toBe(25);
})

test("10 dividido 2 é igual a 5", () => {
    expect(div(10,2)).toBe(5);
})

test("se div igual a 0 retorne messagem Calma lá Paizao", () => {
    expect(div(10,0)).toBe("Calma lá Paizao");
})