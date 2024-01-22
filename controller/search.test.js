const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");
const app = require("./yourExpressApp"); // replace with the actual import of your Express app

jest.mock("axios");

describe("search", () => {
  it("should return data for a valid query", async () => {
    const mockData = {
      Search: [
        { Title: "Movie1", Year: "2021" },
        { Title: "Movie2", Year: "2022" },
        // ... other items
      ],
      // ... other properties
    };

    axios.get.mockResolvedValue({ data: mockData });

    const response = await request(app)
      .get("/your-search-route") // replace with the actual route for search
      .send({ query: "Action" });

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body).toEqual(mockData);
  });

  it("should handle errors and log them", async () => {
    const errorMessage = "An error occurred";
    axios.get.mockRejectedValue(new Error(errorMessage));

    // Replace the route and request payload with your actual values
    const response = await request(app)
      .get("/your-search-route")
      .send({ query: "InvalidQuery" });

    expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.text).toContain(errorMessage);
  });
});
