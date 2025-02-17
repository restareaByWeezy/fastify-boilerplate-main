import { describe, expect, test } from "vitest";
import { makeApp } from "./makeApp";
describe("makeApp()", () => {
  test("\uD5EC\uC2A4\uCCB4\uD06C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uAC00 \uC801\uC808\uD788 \uB3D9\uC791\uD569\uB2C8\uB2E4", async () => {
    const app = await makeApp();
    const response = await app.inject({
      method: "GET",
      url: "/healthz"
    });
    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body)).toStrictEqual({
      ok: true
    });
  });
});
