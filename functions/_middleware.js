const PRIMARY_HOST = "vanararetreat.com";
const EXTRANET_REDIRECT_URL = "https://vanara-central.administrator-5b7.workers.dev";

const HOSTS_TO_REDIRECT = new Set([
  "www.vanararetreat.com",
  "vanarakc.com",
  "www.vanarakc.com"
]);

const CLEAN_PATHS = new Map([
  ["/index.html", "/"],
  ["/about.html", "/about"],
  ["/bungalow.html", "/bungalow"],
  ["/villa.html", "/villa"],
  ["/yurt.html", "/yurt"],
  ["/explore.html", "/explore"],
  ["/bailan-bay.html", "/bailan-bay"],
  ["/privacy.html", "/privacy"],
  ["/terms.html", "/terms"],
  ["/data-deletion.html", "/data-deletion"]
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname === "/extranet" || url.pathname === "/extranet/") {
    return new Response(null, {
      status: 302,
      headers: {
        Location: EXTRANET_REDIRECT_URL,
        "X-Robots-Tag": "noindex, nofollow"
      }
    });
  }

  const cleanPath = CLEAN_PATHS.get(url.pathname);
  const redirectHost = HOSTS_TO_REDIRECT.has(url.hostname.toLowerCase());

  if (redirectHost || cleanPath) {
    url.protocol = "https:";
    url.hostname = PRIMARY_HOST;
    url.port = "";

    if (cleanPath) {
      url.pathname = cleanPath;
    }

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
