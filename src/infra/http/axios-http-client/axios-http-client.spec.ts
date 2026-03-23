import { mockPostRequest } from "@/data/test";
import { AxiosHttpClient } from "./axios-http-client";
import { mockAxios } from "@/infra/test/mock-axios";
import axios from "axios";

jest.mock("axios");

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return { sut, mockedAxios };
};

describe("AxiosHttpClient", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call axios with correct values", async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("should return the correct statusCode and body", async () => {
    const { sut, mockedAxios } = makeSut();
    const httpResponse = await sut.post(mockPostRequest());
    const axiosResponse = await mockedAxios.post.mock.results[0].value;

    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    });
  });
});
