import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import faker from "faker";

jest.mock("axios");
const mcokedAxios = axios as jest.Mocked<typeof axios>;
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe("AxiosHttpClient", () => {
  test("should call axios with correct URL and verb", async () => {
    const url = faker.internet.url();
    const sut = makeSut();
    await sut.post({ url });

    expect(mcokedAxios.post).toHaveBeenCalledWith(url);
  });
});
