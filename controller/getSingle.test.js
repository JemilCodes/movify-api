const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");
const app = require("./yourExpressApp"); // replace with the actual import of your Express app

jest.mock("axios");

describe("getSingle", () => {
  it("should return data for a valid title", async () => {
    const mockData = {
      Title: "Inception",
      Year: "2010",
      // ... other properties
    };

    axios.get.mockResolvedValue({ data: mockData });

    const response = await request(app)
      .get("/your-get-single-route") // replace with the actual route for getSingle
      .send({ Title: "Inception" });

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body).toEqual(mockData);
  });

  it("should handle errors and log them", async () => {
    const errorMessage = "An error occurred";
    axios.get.mockRejectedValue(new Error(errorMessage));

    // Replace the route and request payload with your actual values
    const response = await request(app)
      .get("/your-get-single-route")
      .send({ Title: "InvalidTitle" });

    expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.text).toContain(errorMessage);
  });
});
