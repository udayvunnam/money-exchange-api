import { assert, expect } from "chai";
import request from "supertest";
import app from "../src/app";

describe("POST /convert", () => {
  it("should return converted value when proper body is passed", done => {
    jest.setTimeout(10000);
    request(app)
      .post("/v1/convert")
      .set("Accept", "application/json")
      .send({ value: 100, from: "USD", to: "INR" })
      .expect(res => {
        expect(res.body).to.be.an("object");
        expect(res.body.convertedValue).to.be.a("number");
        expect(res.body.exchangeRate).to.be.a("number");
      })
      .expect(200, done);
  });

  it("should return an error wih 405 status code for invalid input amount", done => {
    request(app)
      .post("/v1/convert")
      .set("Accept", "application/json")
      .send({ value: "Ten", from: "USD", to: "INR" })
      .expect(405, done);
  });
});
