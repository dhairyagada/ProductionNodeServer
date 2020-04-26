require('module-alias/register')
import { server } from "@src/core/Server";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import { Express } from 'express'
import { StatusConstants } from "@src/constants/StatusConstants";
import { apserver } from "../../index";

chai.use(chaiHttp);

describe("Hello World API check", async() => {
     
    let app = await apserver

    it("It Should return a status 200 and Hello World! Message", done => {
        chai
            .request(app)
            .get("/helloworld")
            .end((err, res) => {
                expect(res).to.have.status(StatusConstants.code200);
                expect(res.text).to.equals("Hello World!")
                done();
            });
    });
})
