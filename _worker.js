const RESOLVER_ROUTES = new Set([
  "p6f5jt4szo",
  "w6q9tm"
]);

function rootRedirect(request) {
  return Response.redirect(new URL("/", request.url), 302);
}

async function resolvePointer(request, env, pointerId) {
  const stateUrl = new URL(`/q/${pointerId}/state.json`, request.url);
  const stateResponse = await env.ASSETS.fetch(new Request(stateUrl, {
    headers: { accept: "application/json" }
  }));

  if (!stateResponse.ok) return null;

  const state = await stateResponse.json();
  if (state.kind !== "krwill_qr_pointer.v1") return null;
  if (state.mode !== "redirect") return null;
  if (typeof state.target !== "string" || state.target.length === 0) return null;

  const destination = new URL(state.target, request.url);
  const current = new URL(request.url);
  const sameOrigin = destination.origin === current.origin;
  if (destination.protocol !== "https:" && !sameOrigin) return null;
  if (destination.href === current.href) return null;
  return Response.redirect(destination, 302);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/q" || url.pathname === "/q/") {
      return rootRedirect(request);
    }

    if (url.pathname.startsWith("/q/")) {
      const parts = url.pathname.slice(3).split("/").filter(Boolean);
      const pointerId = parts[0] || "";
      if (!RESOLVER_ROUTES.has(pointerId)) return rootRedirect(request);

      if (parts.length === 1) {
        const redirect = await resolvePointer(request, env, pointerId);
        if (redirect) return redirect;
        if (!url.pathname.endsWith("/")) {
          return Response.redirect(new URL(`/q/${pointerId}/`, request.url), 308);
        }
      }
    }

    return env.ASSETS.fetch(request);
  }
};
