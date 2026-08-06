// Siteyi kullanici adi + sifre ile korur (HTTP Basic Auth).
// Kullanici adi ve sifre Vercel panelinde SITE_USER ve SITE_PASS
// ortam degiskenleri olarak tanimlanir; kodda sifre yazmaz.
export const config = { matcher: "/(.*)" };

export default function middleware(request) {
  const gelen = request.headers.get("authorization") || "";
  const beklenen =
    "Basic " + btoa(`${process.env.SITE_USER}:${process.env.SITE_PASS}`);

  if (process.env.SITE_USER && process.env.SITE_PASS && gelen === beklenen) {
    return; // dogru bilgi -> siteye devam
  }

  return new Response("Giris gerekli", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Economic Intelligence OS"' },
  });
}
