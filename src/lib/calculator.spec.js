const { sum } = require("./calculator");


it('Teste soma de números', () => {
    expect(sum(2,2)).toBe(4)
});

it('Teste soma de números enviando uma string', () => {
    expect(sum('2', '2')).toBe(4)
});

it('Teste soma de números enviando um valor nullo, array, objeto, nullo', () => {
    //vazio
    expect(() =>{
        sum('', 2)
    }).toThrowError()
    //array
    expect(() =>{
        sum([2, 2])
    }).toThrowError()
    //objeto
    expect(() =>{
        sum({})
    }).toThrowError()
    //nullo
    expect(() =>{
        sum()
    }).toThrowError()
});