require ('module-alias/register')
import { expect } from "chai";
import { HelloWorld } from "@src/serviceclasses/helloworld/HelloWorld";

describe("Hello World Test", () => {

  it("It Should Return Hello World!", async () => {
    let result = await HelloWorld.wishHello()
    expect(result).to.equal("Hello World!")
  })
})