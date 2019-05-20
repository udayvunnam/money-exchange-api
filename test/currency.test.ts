import { expect } from "chai";
import request from "supertest";
import app from "../src/app";

describe("GET /currency", () => {
  it("should return 200 OK, with currency list", done => {
    jest.setTimeout(10000);
    request(app)
      .get("/v1/currency")
      .set("Accept", "application/json")
      .expect(res => {
        expect(res.body).to.be.an("object");
      })
      .expect(200, done);
  });
});
