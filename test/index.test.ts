import HelloWorld from "../src";

describe("HelloWorld testing", () => {
  it('should return "Hello World!"', () => {
    expect(HelloWorld).toBe("Hello World!");
  });
});
