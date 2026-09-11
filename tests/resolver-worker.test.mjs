import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../_worker.js", import.meta.url), "utf8");
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const worker = (await import(moduleUrl)).default;

function environment(state) {
  return {
    ASSETS: {
      async fetch(request) {
        const url = new URL(request.url);
        if (url.pathname.endsWith("/state.json")) {
          return Response.json(state);
        }
        return new Response(`asset:${url.pathname}`, { status: 200 });
      }
    }
  };
}

const profile = { kind: "krwill_qr_pointer.v1", mode: "profile", target: null };
const redirect = {
  kind: "krwill_qr_pointer.v1",
  mode: "redirect",
  target: "https://studio.driftingforms.com/"
};

{
  const response = await worker.fetch(
    new Request("https://krwill.xyz/q/p6f5jt4szo"),
    environment(profile)
  );
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "https://krwill.xyz/q/p6f5jt4szo/");
}

{
  const response = await worker.fetch(
    new Request("https://krwill.xyz/q/p6f5jt4szo/"),
    environment(redirect)
  );
  assert.equal(response.status, 302);
  assert.equal(response.headers.get("location"), "https://studio.driftingforms.com/");
}

{
  const response = await worker.fetch(
    new Request("https://krwill.xyz/q/not-a-pointer/"),
    environment(profile)
  );
  assert.equal(response.status, 302);
  assert.equal(response.headers.get("location"), "https://krwill.xyz/");
}

{
  const response = await worker.fetch(
    new Request("https://krwill.xyz/q/w6q9tm/"),
    environment({ kind: "krwill_keychain_pointer.v1", mode: "inactive" })
  );
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "asset:/q/w6q9tm/");
}

{
  const response = await worker.fetch(
    new Request("https://krwill.xyz/privacy/"),
    environment(profile)
  );
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "asset:/privacy/");
}

console.log("resolver worker: ok");
