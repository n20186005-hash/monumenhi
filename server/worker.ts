interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const errorPaths = new Set(["/404", "/404/", "/404.html", "/404.html/"]);

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if ((url.hostname === "monumenhi.com" || url.hostname === "www.monumenhi.com") &&
        (url.protocol !== "https:" || url.hostname !== "monumenhi.com")) {
      url.protocol = "https:";
      url.hostname = "monumenhi.com";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const explicitError = errorPaths.has(url.pathname);
    // The asset service redirects /404.html to /404, whose body is the error page.
    if (explicitError) url.pathname = "/404";
    const response = await env.ASSETS.fetch(explicitError ? new Request(url, request) : request);
    if (!explicitError && response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.delete("Location");
    headers.set("X-Robots-Tag", "noindex, follow");
    return new Response(request.method === "HEAD" ? null : response.body, { status: 404, headers });
  },
};
