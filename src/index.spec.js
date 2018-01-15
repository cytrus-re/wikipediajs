const expect = require("chai").expect;
const wikipediajs = require("./index");

describe("wikipediajs", () => {
  it("returns a promise", () => {
    const request = wikipediajs.search("mundo") instanceof Promise;
    expect(request).to.be.true;
  });
});
