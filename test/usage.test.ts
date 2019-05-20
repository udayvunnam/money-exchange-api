import { expect } from "chai";
import request from "supertest";
import app from "../src/app";

describe("GET /usage", () => {
  it("should return 200 with list of past 10 conversions by default", done => {
    jest.setTimeout(10000);
    request(app)
      .get("/v1/usage")
      .query({ limit: 10 })
      .expect(res => {
        expect(res.body).to.be.an("array");
        expect(res.body).to.have.length.lessThan(11);
      })
      .expect(200, done);
  });

  it("should return 405 for invalid limit parameter", done => {
    request(app)
      .get("/v1/usage")
      .query({ limit: "fifteen" })
      .expect(405, done);
  });

  it("should return 405 for limit greater than 100", done => {
    request(app)
      .get("/v1/usage")
      .query({ limit: 150 })
      .set("Accept", "application/json")
      .expect(405, done);
  });
});
