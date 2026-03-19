import { HttpPostClientSpy } from "../../test/mock-htt-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct url", async () => {
    const url = "http://any-url.com";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
