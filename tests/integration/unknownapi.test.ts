require('module-alias/register')
import { server } from "@src/core/Server";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import { Express } from 'express'
import { StatusConstants } from "@src/constants/StatusConstants";
import { apserver } from "../../index";

chai.use(chaiHttp);

describe("Non Existing API Error check", async () => {
    
    let app = await apserver

    it("It Should return a status 400", done => {
        chai
            .request(app)
            .get("/abcd")
            .end((err, res) => {
                expect(res).to.have.status(StatusConstants.code404);
                expect(res.text).to.equals(StatusConstants.code404Message);
                done();
            });
    });
})