const { queryString, parse } = require("./queryString");

describe('object to query string', () => {
  it("should  create a valid query string  when an object", () => {
    const obj = {
      name: "Marcus",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Marcus&profession=developer");
  });

  it("should  create a valid query string when an array", () => {
    const obj = {
      name: "Marcus",
      abilities: ["JS","TDD"],
    };

    expect(queryString(obj)).toBe("name=Marcus&abilities=JS,TDD");
  });

  it("should throw an error when an object is passed as value", () => {
    const obj = {
      name: "Marcus",
      abilities: {
        firt: "TS",
        second: "TDD",
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Marcus&profession=developer';
    
    expect(parse(qs)).toEqual({
      name: 'Marcus',
      profession: 'developer',
    });
  });

  it('should convert a query string to object', () => {
    const qs = 'name=Marcus';
    
    expect(parse(qs)).toEqual({
      name: 'Marcus',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Marcus&abilities:JS,TDD';
    
    expect(parse(qs)).toEqual({
      name: 'Marcus',
      abilities: ['JS', 'TDD'],
    });
  });
});
